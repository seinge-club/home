'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

type Question = {
    id: number
    icon: string
    question: string
    options: string[]
    correctAnswer: string
}

const questions: Question[] = [
    {
        id: 1,
        icon: 'twemoji:red-apple',
        question: 'What is this?',
        options: ['Banana', 'Apple', 'Orange', 'Grape'],
        correctAnswer: 'Apple',
    },
    {
        id: 2,
        icon: 'twemoji:hot-beverage',
        question: 'How do you order this politely?',
        options: ['Give me coffee', 'I want coffee', 'Can I have a coffee, please?', 'Coffee now'],
        correctAnswer: 'Can I have a coffee, please?',
    },
    {
        id: 3,
        icon: 'twemoji:man-running',
        question: 'What is he doing?',
        options: ['Sleeping', 'Running', 'Cooking', 'Reading'],
        correctAnswer: 'Running',
    },
]

const DemoComponent = () => {
    const [currentStep, setCurrentStep] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const handleOptionClick = (option: string) => {
        if (selectedOption) return // Prevent multiple clicks

        setSelectedOption(option)
        const correct = option === questions[currentStep].correctAnswer
        setIsCorrect(correct)

        if (correct) {
            setScore(score + 1)
        }

        setTimeout(() => {
            if (currentStep < questions.length - 1) {
                setCurrentStep(currentStep + 1)
                setSelectedOption(null)
                setIsCorrect(null)
            } else {
                setCurrentStep(questions.length) // Finish state
            }
        }, 1500)
    }

    const restartText = "Try Again"

    return (
        <div className='bg-dark_grey p-6 rounded-lg w-full max-w-lg mx-auto text-white min-h-[400px] flex flex-col justify-center items-center'>
            <AnimatePresence mode='wait'>
                {currentStep < questions.length ? (
                    <motion.div
                        key={questions[currentStep].id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className='w-full text-center'
                    >
                        <div className='mb-2 text-primary font-medium'>Challenge {currentStep + 1}/{questions.length}</div>
                        <div className='bg-white/10 p-6 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center'>
                            <Icon icon={questions[currentStep].icon} width="64" height="64" />
                        </div>

                        <h3 className='text-2xl font-bold mb-6'>{questions[currentStep].question}</h3>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {questions[currentStep].options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                    disabled={!!selectedOption}
                                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-300
                    ${selectedOption === option
                                            ? isCorrect
                                                ? 'bg-green-500 text-white'
                                                : 'bg-red-500 text-white'
                                            : 'bg-white/10 hover:bg-primary/20 text-white'
                                        }
                    ${selectedOption && option === questions[currentStep].correctAnswer && !isCorrect ? 'bg-green-500/50' : ''}
                  `}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        {selectedOption && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 font-bold text-lg ${isCorrect ? 'text-green-400' : 'text-red-400'}`}
                            >
                                {isCorrect ? '✨ Correct! Great job!' : '❌ Oops! Good try.'}
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="finish"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className='text-center'
                    >
                        <div className='mx-auto mb-6 text-yellow-400'>
                            <Icon icon="twemoji:trophy" width="80" height="80" />
                        </div>
                        <h2 className='text-3xl font-bold mb-4 text-primary'>Challenge Completed!</h2>
                        <p className='text-xl mb-6'>
                            You scored <span className='font-bold text-white'>{score}</span> out of <span className='font-bold text-white'>{questions.length}</span>
                        </p>
                        <p className='text-gray-300 mb-8 max-w-xs mx-auto'>
                            Ready to take your English to the real world? Join Sainge Club today!
                        </p>

                        <button
                            onClick={() => {
                                setCurrentStep(0);
                                setScore(0);
                                setSelectedOption(null);
                                setIsCorrect(null);
                            }}
                            className='bg-primary text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors'
                        >
                            Play Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default DemoComponent
