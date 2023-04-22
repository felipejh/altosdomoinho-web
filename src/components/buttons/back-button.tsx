// Packages
import { Button } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactElement, useEffect, useState } from 'react'

// Icons
import { KeyboardArrowLeft } from '@mui/icons-material'

/**
 * The BackButton component is a button with the function of returning to the previous screen where it is located.
 * It has no properties of its own.
 * When called, it returns a react element (button) already configured
 *
 * @example
 *
 * ```tsx
 * <TopToolbar>
 *    <Grid container>
 *      <Grid item>
 *        <BackButton />
 *      </Grid>
 *    </Grid>
 * </TopToolbar>
 * ```
 */
const BackButton = (): ReactElement => {
  const [count, setCount] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setCount((state) => --state)
  }, [location])

  const handleClick = (): void => {
    navigate(count)
    setIsDisabled(true)
  }

  return (
    <Button
      disabled={isDisabled}
      size="small"
      startIcon={<KeyboardArrowLeft />}
      color="inherit"
      variant="text"
      onClick={handleClick}
    >
      Voltar
    </Button>
  )
}

export default BackButton
