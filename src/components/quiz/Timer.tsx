import { useEffect, useRef, useState } from "react"
import { useQuizStore } from "../../store/quiz.store"

interface TimerProps {
    gameStarted: boolean
    showCountdown: boolean
    onTimerStart?: () => void
    onTimerStop?: () => void
}

const Timer = ({
    gameStarted,
    showCountdown,
    onTimerStart,
    onTimerStop,
}: TimerProps) => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const setTimerStore = useQuizStore((s) => s.setTimer)

    useEffect(() => {
        if (gameStarted && !showCountdown) {
            if (!intervalRef.current) {
                intervalRef.current = setInterval(() => {
                    setTimer((t) => t + 1)
                }, 1000)
                if (onTimerStart) onTimerStart()
            }
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
                setTimer(0)
                if (onTimerStop) onTimerStop()
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [gameStarted, showCountdown])

    useEffect(() =>{
        setTimerStore(timer)
    }, [timer])

    const minutes = String(Math.floor(timer / 60)).padStart(2, "0")
    const seconds = String(timer % 60).padStart(2, "0")

    return (
        <div className="text-32 lg:text-44 text-white">
            {minutes}:{seconds}
        </div>
    )
}

export default Timer
