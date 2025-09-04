import { useEffect } from "react"

const CountDown = ({
    showCountdown,
    setShowCountdown,
    countdown,
    setCountdown,
    setGameStarted,
    handleGameStart,
}: {
    showCountdown: boolean
    setShowCountdown: React.Dispatch<React.SetStateAction<boolean>>
    countdown: number
    setCountdown: React.Dispatch<React.SetStateAction<number>>
    setGameStarted: React.Dispatch<React.SetStateAction<boolean>>
    handleGameStart: () => void
}) => {
    useEffect(() => {
        let countdownTimer: number
        if (showCountdown && countdown > 0) {
            countdownTimer = setTimeout(() => {
                setCountdown((prev) => prev - 1)
            }, 1000)
        } else if (showCountdown && countdown === 0) {
            countdownTimer = setTimeout(() => {
                setShowCountdown(false)
                setGameStarted(true)
            }, 1000)
        }
        return () => clearTimeout(countdownTimer)
    }, [showCountdown, countdown])

    return showCountdown ? (
        <div className="text-56 text-white font-bold min-h-[60px] flex items-center justify-center">
            {countdown > 0 ? countdown : "C'est parti !"}
        </div>
    ) : (
        <button className="btn-action px-24" onClick={handleGameStart}>
            Je suis prêt !
        </button>
    )
}

export default CountDown
