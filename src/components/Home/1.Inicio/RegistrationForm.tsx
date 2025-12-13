'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: 'career',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call / Email sending
        await new Promise((resolve) => setTimeout(resolve, 1500))

        console.log('Form Submitted:', formData)
        // NOTE: Here you would integrate EmailJS or your backend API

        setIsSubmitting(false)
        setIsSuccess(true)
        toast.success('¡Registro exitoso! Te contactaremos pronto.')
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
            >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por registrarte!</h3>
                <p className="text-white/70">Hemos recibido tus datos y un asesor se pondrá en contacto contigo muy pronto para iniciar tu experiencia.</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-primary hover:text-white transition-colors"
                >
                    Enviar otro registro
                </button>
            </motion.div>
        )
    }

    return (
        <div className="w-full max-w-md mx-auto text-left">
            <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Empieza tu Experiencia</h3>
                <p className="text-white/60 text-sm">Déjanos tus datos y diseñaremos un plan a tu medida.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Ej. Juan Pérez"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="juan@ejemplo.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Teléfono / WhatsApp</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="+57 300 123 4567"
                    />
                </div>

                <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-white/80 mb-1">Tu objetivo principal</label>
                    <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                    >
                        <option value="career" className="bg-dark_grey">Mejorar mi carrera profesional</option>
                        <option value="travel" className="bg-dark_grey">Viajar y conocer gente</option>
                        <option value="exam" className="bg-dark_grey">Preparación para examen (IELTS/TOEFL)</option>
                        <option value="hobby" className="bg-dark_grey">Hobby y superación personal</option>
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-darkmode font-bold py-3 px-6 rounded-lg mt-6 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-darkmode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                        </span>
                    ) : (
                        'Enviar Solicitud'
                    )}
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm
