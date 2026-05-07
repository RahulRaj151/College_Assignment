import Student from '../models/Student.js';

export const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ message: 'Student saved', student });
  } catch (error) { next(error); }
};

export const aggregateStudents = async (req, res, next) => {
  try {
    const groupedByRange = await Student.aggregate([
      {
        $group: {
          _id: {
            $switch: {
              branches: [
                { case: { $lte: ['$marks', 40] }, then: '0-40' },
                { case: { $and: [{ $gte: ['$marks', 41] }, { $lte: ['$marks', 70] }] }, then: '41-70' },
                { case: { $and: [{ $gte: ['$marks', 71] }, { $lte: ['$marks', 100] }] }, then: '71-100' }
              ],
              default: 'Out of range'
            }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const sortedProjected = await Student.aggregate([
      { $sort: { marks: -1 } },
      { $project: { _id: 0, name: 1, marks: 1 } }
    ]);

    res.json({ groupedByRange, sortedProjected });
  } catch (error) { next(error); }
};
