import './Slider.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <div className='Slider-div'>
    <Box sx={{ width: 300 }}>
      <Slider  defaultValue={0}  aria-label="Default" valueLabelDisplay="auto"   />
    </Box>
    </div>
  );
}