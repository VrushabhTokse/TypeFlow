const TestResult = require('../models/TestResult');

exports.saveResult = async (req, res) => {
  try {
    const { wpm, accuracy, totalCharacters, errorsCount, durationSeconds, level } = req.body;

    const testResult = new TestResult({
      user: req.user.id,
      wpm,
      accuracy,
      totalCharacters,
      errorsCount,
      durationSeconds,
      level
    });

    await testResult.save();
    res.status(201).json(testResult);
  } catch (error) {
    console.error('Save test result error:', error);
    res.status(500).json({ message: 'Server error saving result' });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const results = await TestResult.find({ user: req.user.id }).sort({ date: -1 });
    res.json(results);
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ message: 'Server error fetching history' });
  }
};

exports.getStats = async (req, res) => {
  try {
    const results = await TestResult.find({ user: req.user.id });
    
    if (results.length === 0) {
      return res.json({ totalTests: 0, averageWpm: 0, highestWpm: 0 });
    }

    const totalTests = results.length;
    const highestWpm = Math.max(...results.map(r => r.wpm));
    const averageWpm = results.reduce((acc, curr) => acc + curr.wpm, 0) / totalTests;

    res.json({
      totalTests,
      highestWpm,
      averageWpm: Math.round(averageWpm)
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error fetching stats' });
  }
};
