import { TextArea } from '@/components/textArea/textArea';
import { ButtonGreen } from '@/components/buttonGreen/buttonGreen';
import styles from './step.module.scss';
import Symptoms from '@/assets/icons/symptoms';
import Diagnosys from '@/assets/icons/diagnosys';
import Result from '@/assets/icons/result';

interface StepProps {
  subtitle: string;
  step: string;
}

export const Step = ({ subtitle, step }: StepProps) => {
  return (
    <div className={styles.section}>
      {step == 'sintomas' && <Symptoms />}
      {step == 'diagnostico' && <Diagnosys />}
      {step == 'final' && <Result />}
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <TextArea />
      <ButtonGreen
        step={step}
        label={step == 'final' ? 'Finalizar' : 'Continuar'}
      />
    </div>
  );
};
