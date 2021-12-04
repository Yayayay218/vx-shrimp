import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ConfigSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },
  { timestamps: true }
);

ConfigSchema.plugin(mongoosePaginate);

export default mongoose.model('Config', ConfigSchema);