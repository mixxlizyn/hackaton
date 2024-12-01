import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import birdImage from './assets/Vector.svg';

const RulesEngine = ({ rules, setRules }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRule, setNewRule] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewRule({ name: '', description: '' }); // Очистка полей
    setIsModalOpen(false);
  };

  const handleSaveRule = () => {
    const ruleWithId = { ...newRule, id: Date.now() }; // Уникальный ID для правила
    setRules([...rules, ruleWithId]); // Сохраняем новое правило
    closeModal(); // Закрыть модальное окно
    navigate(`/rule/${ruleWithId.id}`); // Перенаправить на страницу этого правила
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Rules Engine</h1>
      </header>
      <main className="main-content">
        {rules.length === 0 ? (
          <div className="empty-state">
            <div className="icon">
              <img src={birdImage} alt="bird" />
            </div>
            <p className="message">Вы не добавили ни одного правила</p>
            <p className="sub-message">
              Чтобы создать ваше первое правило, нажмите кнопку <span>"Добавить правило"</span>
            </p>
          </div>
        ) : (
          <div className="rules-list">
            {rules.map((rule) => (
              <div key={rule.id} className="rule-item" onClick={() => navigate(`/rule/${rule.id}`)}>
                <h3>{rule.name}</h3>
                <p>{rule.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <button className="add-rule-btn" onClick={openModal}>
        + Добавить правило
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Добавить новое правило</h2>
            <div className="form-group">
              <label>Название правила</label>
              <input
                type="text"
                placeholder="Введите название"
                value={newRule.name}
                onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Описание</label>
              <textarea
                placeholder="Введите описание"
                value={newRule.description}
                onChange={(e) => setNewRule({ ...newRule, description: e.target.value })}
              ></textarea>
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Отмена
              </button>
              <button className="create-btn" onClick={handleSaveRule} disabled={!newRule.name || !newRule.description}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RulesEngine;
