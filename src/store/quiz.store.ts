import { create } from "zustand"
import { devtools } from "zustand/middleware"
import type { ArabicLetter } from "../utils/arabicLetters"

interface QuizState {
  timer: number
  score: number
  feedbackVisual: {
    [key: string]: [string, string]
  }
  setTimer: (time: number) => void
  setScore: (score: number) => void
  setFeedbackVisual: (currentLetter: ArabicLetter, selectedLetter: string) => void
  clearQuiz: () => void
}

export const useQuizStore = create<QuizState>()(
     devtools((set) => ({
        timer: 0,
        score: 0,
        feedbackVisual: {},
        setTimer: (t: number) => set({ timer: t }),
        setScore: (s: number) => set({score: s}),
        setFeedbackVisual: (currentLetter: ArabicLetter, selectedLetter: string) => set((state) => {
          const key = (Object.keys(state.feedbackVisual).length + 1).toString();
          return {
            feedbackVisual: {
              ...state.feedbackVisual,
              ['letter' + key]: [currentLetter, selectedLetter],
            }
          }
        }),
        clearQuiz: () =>
            set(() => ({
                timer: 0,
                score: 0,
                feedbackVisual: {}
            })),
     }))
)