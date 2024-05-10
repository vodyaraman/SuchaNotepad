import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

// Функция для изменения цвета
function lightenOrDarkenColor(hex, amount) {
    // Проверка на наличие альфа-канала
    let hasAlpha = hex.length === 9; // #rrggbbaa
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    let a = hasAlpha ? parseInt(hex.slice(7, 9), 16) : 255;
  
    r = Math.max(Math.min(255, r + amount), 0);
    g = Math.max(Math.min(255, g + amount), 0);
    b = Math.max(Math.min(255, b + amount), 0);
  
    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');
    a = a.toString(16).padStart(2, '0');
  
    return hasAlpha ? `#${r}${g}${b}${a}` : `#${r}${g}${b}`;
  }
  

// Компонент для отображения градиента
const GradientBackground = ({ children, backgroundColor, height = '100%', width = '100%', borderRadius = '0'}) => {
  const gradientStartColor = lightenOrDarkenColor(backgroundColor, 70);
  const gradientEndColor = lightenOrDarkenColor(backgroundColor, -70);

  return (
    <LinearGradient
      style={{ height, width, borderRadius}}
      colors={[gradientStartColor, gradientEndColor]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;