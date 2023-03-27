import { Backdrop, CircularProgress } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function LoadingOverlay() {

    const {loading} = useContext(UserContext)

    return (
        <Backdrop
            sx={{ color: '#E83F5B', zIndex: 1000, bgcolor: "#12121480" }}
            open={loading}
        >
            <CircularProgress color="inherit" />
      </Backdrop>
    )
}
