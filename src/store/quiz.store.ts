import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface QuizState {
  timer: number
  score: number
  setTimer: (time: number) => void
  setScore: (score: number) => void
  clearQuiz: () => void
}

export const useQuizStore = create<QuizState>()(
     devtools((set) => ({
        timer: 0,
        score: 0,
        setTimer: (t: number) => set({ timer: t }),
        setScore: (s: number) => set({score: s}),
        clearQuiz: () =>
            set(() => ({
                timer: 0,
                score: 0
            })),
     }))
)