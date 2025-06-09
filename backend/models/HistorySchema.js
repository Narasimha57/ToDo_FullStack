import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  action: {
    type: String,
    required: true,
  },
  tag:{
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
});

export default mongoose.model('History', historySchema);
