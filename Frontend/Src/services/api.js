// Base URL — change this to your deployed backend URL in production
const BASE_URL = 'https://hl6vgwrr-5000.inc1.devtunnels.ms/api';

// ─── Helper ───────────────────────────────────────────────────────────────────
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
};

// ─── Home Page APIs ───────────────────────────────────────────────────────────
export const getHomeData       = () => fetchData('/home');
export const getHeroData       = () => fetchData('/home/hero');
export const getPhasesData     = () => fetchData('/home/phases');
export const getFlowData       = () => fetchData('/home/flow');
export const getPatientSafety  = () => fetchData('/home/patient-safety');
export const getStatsData      = () => fetchData('/home/stats');

// ─── Other Page APIs ──────────────────────────────────────────────────────────
export const getAboutData      = () => fetchData('/about');
export const getResourcesData  = () => fetchData('/resources');
export const getStandardsData  = () => fetchData('/standards');
export const getContactData    = () => fetchData('/contact');

// ─── Contact Form Submission ──────────────────────────────────────────────────
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/contact/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};