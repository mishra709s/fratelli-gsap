import { useMediaQuery } from 'react-responsive'

export const useMaskSettings = () => {
  // Use mutually exclusive ranges
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  if (isMobile) {
    return {
      initialMaskPos: '50% 43%', // Start closer to the viewport
      initialMaskSize: '3000% 3000%',
      maskPos: '50% 1%',
      maskSize: '50% 50%',
    }
  }

  if (isTablet) {
    return {
      initialMaskPos: '50% 47%',
      initialMaskSize: '3500% 3500%',
      maskPos: '50% 1%',
      maskSize: '30% 30%',
    }
  }

  // Desktop (default)
  return {
    initialMaskPos: '50% 1%',
    initialMaskSize: '1800% 1800%',
    maskPos: '50% 2%',
    maskSize: '12% 12%',
  }
  // return {
  //   initialMaskPos: '50% 22%',
  //   initialMaskSize: '3500% 3500%',
  //   maskPos: '50% 22%',
  //   maskSize: '20% 20%',
  // }
}
