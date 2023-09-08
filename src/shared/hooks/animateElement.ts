import { useSpring as spring, UseSpringProps } from "react-spring";

interface AnimationProps {
  animationProps: UseSpringProps;
}

const animateElement = ({animationProps}: AnimationProps) => {
  const animationArgs: UseSpringProps = { ...animationProps };
  return spring(animationArgs);
};

export default animateElement;
