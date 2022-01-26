import { ref, watch } from 'vue'
export default function useSteps(modalVisible) {
  const currentStep = ref(0)
  const canNextStep = ref(false)

  const nextStep = () => {
    currentStep.value += 1
  }

  const prevStep = () => {
    currentStep.value -= 1
  }

  watch(modalVisible, (val) => {
    if (!val) {
      currentStep.value = 0
      canNextStep.value = false
    }
  })

  const catchFileListLength = (fileListLength) => {
    if (fileListLength === 0) {
      canNextStep.value = false
    } else {
      canNextStep.value = true
    }
  }

  return {
    currentStep,
    canNextStep,
    nextStep,
    prevStep,
    catchFileListLength,
  }
}
