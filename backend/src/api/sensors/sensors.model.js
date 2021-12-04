import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const SensorsSchema = new Schema(
  {
    temp: {
      type: Number,
    },
    ph: {
      type: Number,
    },
    tds: {
      type: Number,
    },
    status: String,
    warning: String,
  },
  { timestamps: true }
);

SensorsSchema.plugin(mongoosePaginate);
SensorsSchema.plugin(mongooseUniqueValidator);

const Sensors = mongoose.model('Sensors', SensorsSchema);
export default Sensors;
