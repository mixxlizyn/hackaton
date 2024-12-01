import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RuleDetails.css';

const RuleDetails = ({ rules, setRules }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const rule = rules.find((rule) => rule.id === parseInt(id, 10));

  if (!rule) {
    return <div>Правило не найдено</div>;
  }

  const handleUpdateDevice = () => {
    // Логика выбора устройства
    console.log('Выбор устройства');
  };

  const handleUpdateAction = () => {
    // Логика выбора действия
    console.log('Выбор действия');
  };

  return (
    <div className="rule-details-container">
      <header className="rule-details-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Назад
        </button>
        <h1>{rule.name}</h1>
      </header>

      <main className="rule-details-content">
        <p><strong>Описание:</strong> {rule.description}</p>

        <div className="action-block" onClick={handleUpdateDevice}>
          <div className="icon-placeholder">⚙</div>
          <p>Выбрать устройство</p>
          <p className="sub-text">
            Выберите устройство, чтобы применить правило.
          </p>
        </div>

        <div className="action-block" onClick={handleUpdateAction}>
          <div className="icon-placeholder">●</div>
          <p>Добавить действие</p>
          <p className="sub-text">
            Добавьте одно или несколько действий для выполнения.
          </p>
        </div>
      </main>
    </div>
  );
};

export default RuleDetails;
