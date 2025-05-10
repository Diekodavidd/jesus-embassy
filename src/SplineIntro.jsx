import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    if (e.target.name === 'Welcome') {
      navigate('/homepage'); // Change to your target route
    }
  };

  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/8yCH-5vnBD6QbNGS/scene.splinecode"
        onMouseDown={handleMouseDown}
      />
    </main>
  );
}
