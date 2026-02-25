import { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ open, onClose }: PrivacyModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className="relative z-[2001] w-[90%] max-w-[640px] max-h-[80vh] overflow-y-auto bg-background rounded-lg p-8 shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-heading font-bold mb-4">Политика конфиденциальности</h2>
          <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта.</p>
          <p>
            <strong>Оператором персональных данных является:</strong><br />
            Индивидуальный предприниматель Жирова Анна Андреевна,<br />
            ИНН 774312630337, ОГРНИП 324774600079280.
          </p>
          <h3 className="text-lg font-heading font-bold mt-6 mb-2">1. Персональные данные</h3>
          <p>Оператор обрабатывает следующие персональные данные пользователей:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>фамилия, имя, отчество;</li>
            <li>номер телефона;</li>
            <li>сведения о музыкальной группе;</li>
            <li>сведения о музыкальном инструменте, на котором играет пользователь.</li>
          </ul>
          <h3 className="text-lg font-heading font-bold mt-6 mb-2">2. Цель обработки персональных данных</h3>
          <p>Персональные данные обрабатываются с целью обработки заявки, обратной связи и подбора подходящего формата взаимодействия с пользователем.</p>
          <h3 className="text-lg font-heading font-bold mt-6 mb-2">3. Обработка и защита данных</h3>
          <p>Обработка персональных данных осуществляется в соответствии с законодательством Российской Федерации. Персональные данные не передаются третьим лицам.</p>
          <h3 className="text-lg font-heading font-bold mt-6 mb-2">4. Срок обработки</h3>
          <p>Персональные данные обрабатываются до достижения цели обработки либо до момента отзыва согласия.</p>
          <h3 className="text-lg font-heading font-bold mt-6 mb-2">5. Отзыв согласия</h3>
          <p>Пользователь вправе отозвать согласие на обработку персональных данных, направив обращение через контактные данные, указанные на сайте.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
