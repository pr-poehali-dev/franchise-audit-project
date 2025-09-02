import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [savedMoney, setSavedMoney] = useState(0);
  const [consultationsGiven, setConsultationsGiven] = useState(0);
  const [franchisesChecked, setFranchisesChecked] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    franchise: '',
    budget: '',
    message: ''
  });

  // Анимированные счетчики
  useEffect(() => {
    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration * 60 / 1000); // 60fps
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16.67); // ~60fps
    };

    // Запуск анимации счетчиков с задержкой
    setTimeout(() => animateCounter(setSavedMoney, 47, 2000), 500);
    setTimeout(() => animateCounter(setConsultationsGiven, 340, 2500), 800);
    setTimeout(() => animateCounter(setFranchisesChecked, 150, 2200), 1100);
  }, []);

  // Smooth scroll функция
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Здесь будет отправка данных на сервер
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const problems = [
    {
      title: "Скрытые платежи и кабальные условия в договоре",
      description: "Вы можете быть обязаны годами закупать товар по завышенным ценам или платить роялти даже при убытках.",
      icon: "AlertTriangle"
    },
    {
      title: "Неясная реальная прибыль точек",
      description: "Франчайзер показывает вам идеальные цифры пилотного ресторана, а не средние показатели реально работающих партнеров.",
      icon: "TrendingDown"
    },
    {
      title: "Невыполнимые обещания поддержки",
      description: "«Мы поможем с запуском» на деле может оказаться одним письмом с инструкцией, а не реальным выездом специалиста.",
      icon: "UserX"
    },
    {
      title: "Отсутствие реальной статистики по закрытиям",
      description: "Сколько франчайзи на самом деле прогорели и ушли с молчаливым соглашением не разглашать причины?",
      icon: "Eye"
    }
  ];

  const auditFeatures = [
    {
      title: "Юридическая экспертиза договора",
      description: "Ищем скрытые платежи, условия расторжения, штрафы и невыгодные для вас обязательства.",
      icon: "Scale"
    },
    {
      title: "Анализ финансовой модели",
      description: "Проверяем рентабельность, окупаемость и реалистичность плановых показателей, которые вам озвучили.",
      icon: "Calculator"
    },
    {
      title: "Тайный покупатель и звонок",
      description: "«Звоним» под видом потенциального покупателя и оцениваем качество реальной поддержки и обучения.",
      icon: "Phone"
    },
    {
      title: "Конфиденциальные опросы франчайзи",
      description: "Наши наработанные связи позволяют узнать реальные цифры прибыли и проблемы из первых уст.",
      icon: "Users"
    },
    {
      title: "Итоговый отчет с вердиктом",
      description: "Вы получаете не просто данные, а четкий вывод: «СТОИТ покупать» или «НЕ СТОИТ покупать» с аргументацией.",
      icon: "FileCheck"
    }
  ];

  const advantages = [
    {
      title: "Экономим ваши деньги и время",
      description: "Стоимость нашего аудита составляет небольшую долю от суммы среднего паушального взноса и первоначальных вложений в открытие бизнеса по франшизе.",
      icon: "DollarSign",
      color: "accent"
    },
    {
      title: "Говорим на языке цифр, а не обещаний",
      description: "Мы не верим на слово. Мы проверяем договора, отчеты и цифры. Наше мнение основано на фактах.",
      icon: "BarChart3",
      color: "primary"
    },
    {
      title: "Мы по обе стороны баррикад",
      description: "Я, Сергей Токмаков, и моя команда сами были франчайзи. Мы знаем всю внутреннюю кухню, уловки и юридические капканы из личного опыта.",
      icon: "Shield",
      color: "secondary"
    },
    {
      title: "Полная конфиденциальность",
      description: "Франчайзер не узнает, что вы проводите проверку. Вы сохраняете лицо и ведете переговоры уже с полной колодой карт на руках.",
      icon: "Lock",
      color: "destructive"
    }
  ];

  const testimonials = [
    {
      name: "Максим",
      business: "планировал открыть кофейню",
      text: "Сергей, спасибо вам! По вашей рекомендации я отказался от, казалось бы, выгодной франшизы. Ваш эксперт нашел в договоре условие об обязательной закупке кофейного зерна только у держателя франшизы по цене, выше средне-рыночной на 17%. Вы сохранили мне 3.5 млн рублей вложений и годы жизни!",
      amount: "3.5 млн ₽"
    },
    {
      name: "Анна",
      business: "открыла салон оптики",
      text: "Заказала аудит по франшизе, которую уже почти выбрала. Вердикт был «СТОИТ», но с рекомендациями по изменению 3 пунктов в договоре. С этими правками я пошла на переговоры и смогла их отстоять! Открылась, вышла на плановую прибыль на 2 месяца раньше.",
      amount: "2 месяца экономии"
    },
    {
      name: "Сергей",
      business: "хотел купить франшизу в сфере образования",
      text: "Ваши несколько тайных звонков франчайзеру и правильные вопросы показали всю картину целиком. Вместо обещанного бизнеса «под ключ» меня ждала невнятная консультация и пачка PDF-инструкций вместо обучения. Ваше твердое «НЕ СТОИТ» спасло мне 1,2 млн рублей.",
      amount: "1.2 млн ₽"
    }
  ];

  const faqItems = [
    {
      question: "Сколько стоит аудит?",
      answer: "Стоимость полного аудита под ключ рассчитывается индивидуально и зависит от вашего запроса по конкретной франшизе. Мы понимаем, что каждый проект уникален. После знакомства с вашей ситуацией мы предложим точную и справедливую цену. В любом случае, стоимость аудита в разы меньше паушального взноса и первоначальных вложений."
    },
    {
      question: "Как происходит работа?",
      answer: "Вы оставляете заявку, мы связываемся с вами для уточнения деталей и заключаем договор. Вы предоставляете имеющиеся у вас документы (предложение франчайзера, договор, фин.модель). Мы проводим все этапы аудита в течение 5-7 рабочих дней и выдаем вам итоговый отчет с подробным разбором и вердиктом."
    },
    {
      question: "Франчайзер торопит меня поскорее заключить договор. Вы можете провести аудит за 24 часа?",
      answer: "К глубокому сожалению, мы не можем провести полноценный аудит за 24 часа. И никто не сможет. Это нереально и некачественно. Для грамотного, глубокого анализа требуется время: доступ к платным базам данных, поиск и конфиденциальные созвоны с действующими франчайзи. Лучше подождать несколько дней для уверенности, чем, поторопившись, «слить» все свои деньги."
    },
    {
      question: "По результатам аудита я получу только ответ вида «стоит/не стоит»?",
      answer: "Абсолютно нет. Вы получите детальный, многостраничный отчет. В нем мы логически обоснуем, со ссылками на все проверенные факты и цифры, наше заключение. Мы не просто скажем «да» или «нет», а объясним почему именно так, а также — насколько реалистичны заявленные франчайзером срокы окупаемости и план по прибыли."
    },
    {
      question: "Что если ваше заключение будет «НЕ СТОИТ»?",
      answer: "Это лучший возможный исход! Это значит, что мы только что сэкономили вам несколько миллионов рублей, которые вы могли бы потерять, и несколько лет жизни, потраченных на работу в убыток. Вы платите не за положительный ответ, а за истину. И в этом случае наша услуга окупается многократно."
    },
    {
      question: "Вы даете гарантию прибыли?",
      answer: "Нет, и никто не может этого сделать. Рынок, локация, персонал — это зона вашей ответственности. Мы же даем гарантию того, что сама франшиза как бизнес-модель не содержит фатальных изъянов, скрытых платежей и заведомо невыполнимых обещаний."
    }
  ];

  const ContactModal = () => (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Получить консультацию</DialogTitle>
          <DialogDescription className="text-center">
            Оставьте свои контакты и мы свяжемся с вами в течение 30 минут
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+7 (999) 123-45-67"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="franchise">Какую франшизу рассматриваете?</Label>
            <Input
              id="franchise"
              value={formData.franchise}
              onChange={(e) => handleInputChange('franchise', e.target.value)}
              placeholder="Название франшизы"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget">Планируемый бюджет</Label>
            <Select onValueChange={(value) => handleInputChange('budget', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите диапазон" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="500k-1m">500 тыс - 1 млн ₽</SelectItem>
                <SelectItem value="1m-3m">1 - 3 млн ₽</SelectItem>
                <SelectItem value="3m-5m">3 - 5 млн ₽</SelectItem>
                <SelectItem value="5m+">Более 5 млн ₽</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Дополнительная информация</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Расскажите подробнее о ваших планах..."
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <ContactModal />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-primary">Аудит Франшиз</div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('problems')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Проблемы
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Решение
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </div>
            <Button size="sm" onClick={() => setIsModalOpen(true)}>
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden px-4 py-20 lg:py-32 pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-8 px-6 py-2 text-sm font-medium">
              <Icon name="Shield" size={16} className="mr-2" />
              15+ лет экспертного опыта
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Перестаньте гадать.
              </span>
              <br />
              <span className="text-foreground">
                Узнайте, окупится ли ваша франшиза
              </span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl">
                до того, как вы отдадите деньги
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Профессиональный аудит франшизы от экспертов с 15-летним опытом. 
              Получите независимый вердикт <span className="text-accent font-semibold">«СТОИТ»</span> или 
              <span className="text-destructive font-semibold"> «НЕ СТОИТ»</span> покупать и защитите свои инвестиции.
            </p>
            
            {/* Анимированные счетчики */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {savedMoney}+ <span className="text-2xl">млн ₽</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  сэкономлено клиентами
                </p>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {consultationsGiven}+
                </div>
                <p className="text-muted-foreground font-medium">
                  консультаций проведено
                </p>
              </div>
              <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 animate-scale-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {franchisesChecked}+
                </div>
                <p className="text-muted-foreground font-medium">
                  франшиз проверено
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl animate-scale-in"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить бесплатную консультацию
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('faq')}
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="px-4 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Выбирая франшизу, вы рискуете столкнуться с тем, 
              <span className="text-destructive"> о чем умалчивают</span> на презентациях
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up border-l-4 border-l-destructive"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-destructive/10 rounded-full group-hover:bg-destructive/20 transition-colors">
                      <Icon name={problem.icon} size={24} className="text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Мы проводим полноценное расследование вместо вас. 
              <span className="text-accent">Спите спокойно</span>, пока мы проверяем.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Что входит в наш комплексный аудит под ключ
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {auditFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up border-l-4 border-l-accent"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <Icon name={feature.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Почему наш аудит — это <span className="text-primary">не трата денег</span>, 
              а ваша главная инвестиция в спокойствие
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up border-l-4 border-l-${advantage.color}`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setIsHovered(`advantage-${index}`)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${advantage.color}/10 rounded-full group-hover:bg-${advantage.color}/20 transition-colors ${isHovered === `advantage-${index}` ? 'animate-pulse' : ''}`}>
                      <Icon name={advantage.icon} size={24} className={`text-${advantage.color}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 group-hover:text-${advantage.color} transition-colors`}>
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Before Testimonials */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in">
            Не позвольте эмоциям принимать решения за миллионы рублей
          </h3>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 animate-scale-in"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить бесплатную консультацию
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Истории <span className="text-accent">спасенных инвестиций</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Несколько отзывов от реальных людей, которые решили с нами работать и получили результативное решение
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="self-start mb-4 text-accent border-accent">
                    Сэкономлено: {testimonial.amount}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ответы на <span className="text-primary">частые вопросы</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Примите самое важное бизнес-решение
            </h2>
            <h3 className="text-2xl md:text-3xl mb-8 opacity-90">
              решение не терять деньги
            </h3>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Выбор франшизы определяет ваши доходы на годы вперед. 
              Не доверяйте его интуиции и красивым брошюрам. 
              Доверьте его экспертам, которые говорят с вами начистоту.
            </p>
            <div className="space-y-6">
              <Button 
                size="lg" 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-4 text-xl font-bold bg-white text-primary hover:bg-white/90 animate-scale-in shadow-2xl"
              >Получить бесплатную консультацию</Button>
              <div className="max-w-2xl mx-auto">
                <Badge variant="secondary" className="px-6 py-2 text-base bg-white/20 text-white border-white/30"></Badge>
                <p className="text-sm mt-4 opacity-80">
                  Только для тех, кто прямо сейчас нажмет кнопку, мы забронируем 3 бонуса из сферы бизнеса 
                  на общую сумму 59,900 руб. При подписании Договора на работу с нами, вы получите 
                  3 бизнес-бонуса абсолютно бесплатно.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Аудит франшиз под ключ</h3>
          <p className="text-white/70 mb-6">
            Профессиональная экспертиза с 15-летним опытом
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" onClick={() => setIsModalOpen(true)} className="text-white hover:text-white/80">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button variant="ghost" onClick={() => setIsModalOpen(true)} className="text-white hover:text-white/80">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}