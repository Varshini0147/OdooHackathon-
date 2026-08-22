const express = require('express');
const router = express.Router();
const attendanceRecords = [];
const leaveRequests = [];
router.post('/attendance/mark', (req, res) => {
const { userId, type } = req.body;
const record = { userId, type, timestamp: new Date(), status: type === 'Check-In' ? 'Present' : 'Left' };
attendanceRecords.push(record);
res.json({ message: 'Attendance recorded', status: record.status });
});
router.post('/leave/apply', (req, res) => {
     const { userId, type, startDate, endDate, reason } = req.body;
     const newLeave = {
         id: `lvl_${Date.now()}`,
             userId,
             type,
             startDate,
             endDate,
              reason,
                status: 'Pending'
 };
 leaveRequests.push(newLeave);
 res.status(201).json({ message: 'Leave submitted', leave: newLeave });
 });
 router.post('/leave/approve', (req, res) => {
 const { leaveId, status } = req.body; // status: 'Approved' | 'Rejected'
 const leave = leaveRequests.find(l => l.id === leaveId);
 if (leave) {
    leave.status = status;
    return res.json({ message: `Leave status updated to ${status}`, leave });
}
 res.status(404).json({ error: 'Leave request not found' });
 });
 const app = express();
 app.use(express.json());
 const { router: authRouter } = require('./routes/auth');
 app.use('/api/auth', authRouter);
 app.use('/api', router);
 app.listen(5000, () => console.log('HRMS Backend running on port 5000'));