// controllers/recommendationController.js
export const getRecommendation = async (req, res) => {
  try {
    const {
      location,
      people,
      days,
      powerCapacity,
      backupDuration,
      serviceType,
    } = req.body;

    let recommendedPlan = 'ECR Basic';
    let message = 'Good for standard travel and backup needs.';

    if (location === 'cold' && powerCapacity >= 2) {
      recommendedPlan = 'ECR Pro';
      message = 'Best for colder regions and longer battery usage.';
    }

    if (people >= 5 || days >= 7) {
      recommendedPlan = 'ECR Max';
      message = 'Recommended for larger groups or long trips.';
    }

    const estimatedCost =
      serviceType === 'rent'
        ? powerCapacity * days * 400
        : powerCapacity * 25000;

    res.json({
      recommendedPlan,
      estimatedCost,
      backupDuration,
      message,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to generate recommendation',
    });
  }
};