import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RulesEngine from './RulesEngine';
import RuleDetails from './RuleDetails.js';

const App = () => {
  const [rules, setRules] = useState([]); // Состояние для правил

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RulesEngine rules={rules} setRules={setRules} />} />
        <Route path="/rule/:id" element={<RuleDetails rules={rules} setRules={setRules} />} />
      </Routes>
    </Router>
  );
};

export default App;
