document.addEventListener('DOMContentLoaded', function() {
    // Open first FAQ item by default
    const firstFaqAnswer = document.querySelector('.faq-item:first-child .faq-answer');
    if (firstFaqAnswer) {
        firstFaqAnswer.classList.add('active');
    }
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                }
            });
            
            // Toggle current answer
            question.setAttribute('aria-expanded', !isExpanded);
            answer.classList.toggle('active');
        });

        // Add keyboard support
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});