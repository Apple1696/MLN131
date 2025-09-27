import  { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Clock, Trophy, RotateCcw, Play } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Dân chủ tư sản ra đời chủ yếu trong bối cảnh nào?",
    options: [
      { label: "A. Sự thắng lợi của phong trào công nhân thế kỷ XX", value: "A" },
      { label: "B. Cách mạng tư sản từ thế kỷ XVII – XIX", value: "B" },
      { label: "C. Cách mạng Tháng Mười Nga năm 1917", value: "C" },
      { label: "D. Sự sụp đổ của chủ nghĩa thực dân thế kỷ XX", value: "D" }
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    question: "Dân chủ xã hội chủ nghĩa lần đầu tiên được thiết lập ở đâu?",
    options: [
      { label: "A. Pháp năm 1789", value: "A" },
      { label: "B. Mỹ năm 1776", value: "B" },
      { label: "C. Nga năm 1917", value: "C" },
      { label: "D. Trung Quốc năm 1949", value: "D" }
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    question: "Bản chất giai cấp của dân chủ tư sản là gì?",
    options: [
      { label: "A. Quyền lực thuộc về toàn thể nhân dân lao động", value: "A" },
      { label: "B. Quyền lực thực chất do giai cấp tư sản chi phối", value: "B" },
      { label: "C. Quyền lực thuộc về giai cấp phong kiến", value: "C" },
      { label: "D. Quyền lực do quân đội và cảnh sát nắm giữ", value: "D" }
    ],
    correctAnswer: "B"
  },
  {
    id: 4,
    question: "Nguyên tắc \"tập trung dân chủ\" là đặc trưng của mô hình nào?",
    options: [
      { label: "A. Dân chủ tư sản", value: "A" },
      { label: "B. Dân chủ xã hội chủ nghĩa", value: "B" },
      { label: "C. Quân chủ lập hiến", value: "C" },
      { label: "D. Dân chủ chủ nô", value: "D" }
    ],
    correctAnswer: "B"
  },
  {
    id: 5,
    question: "Tam quyền phân lập (lập pháp – hành pháp – tư pháp) là đặc điểm cơ bản của:",
    options: [
      { label: "A. Dân chủ tư sản", value: "A" },
      { label: "B. Dân chủ xã hội chủ nghĩa", value: "B" },
      { label: "C. Chế độ phong kiến", value: "C" },
      { label: "D. Chế độ chuyên chế cổ đại", value: "D" }
    ],
    correctAnswer: "A"
  },
  {
    id: 6,
    question: "Mục tiêu tối thượng của dân chủ xã hội chủ nghĩa là:",
    options: [
      { label: "A. Duy trì chế độ tư hữu", value: "A" },
      { label: "B. Tối đa hóa lợi nhuận cho giai cấp thống trị", value: "B" },
      { label: "C. Xóa bỏ áp bức, bóc lột, xây dựng xã hội công bằng – văn minh", value: "C" },
      { label: "D. Bảo vệ lợi ích của các tập đoàn tài chính", value: "D" }
    ],
    correctAnswer: "C"
  },
  {
    id: 7,
    question: "Ví dụ nào dưới đây phản ánh rõ hạn chế của dân chủ tư sản?",
    options: [
      { label: "A. Cuba duy trì y tế và giáo dục miễn phí", value: "A" },
      { label: "B. Phong trào \"Áo vàng\" tại Pháp bị trấn áp", value: "B" },
      { label: "C. Nhân dân Việt Nam có quyền bãi nhiệm đại biểu", value: "C" },
      { label: "D. Trung Quốc thực hiện \"dân chủ hiệp thương\"", value: "D" }
    ],
    correctAnswer: "B"
  },
  {
    id: 8,
    question: "Điểm khác biệt nổi bật giữa dân chủ tư sản và dân chủ XHCN là:",
    options: [
      { label: "A. Một bên bảo vệ lợi ích của giai cấp tư sản, một bên xuất phát từ lợi ích của nhân dân lao động", value: "A" },
      { label: "B. Cả hai đều đặt lợi ích cộng đồng lên trên lợi ích cá nhân", value: "B" },
      { label: "C. Cả hai đều dựa trên sở hữu công cộng về tư liệu sản xuất", value: "C" },
      { label: "D. Một bên do phong kiến nắm giữ, một bên do công nhân lãnh đạo", value: "D" }
    ],
    correctAnswer: "A"
  }
];

export default function DemocracyQuiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Timer effect
  useEffect(() => {
    if (!isTimerActive || isQuizCompleted || !isQuizStarted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleNextQuestion();
          return 20;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, isTimerActive, isQuizCompleted, isQuizStarted]);

  // Reset timer when question changes
  useEffect(() => {
    if (isQuizStarted && !isQuizCompleted) {
      setTimeRemaining(20);
      setSelectedAnswer(answers[currentQuestion?.id] || '');
    }
  }, [currentQuestionIndex, isQuizStarted]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setIsTimerActive(true);
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    setIsQuizCompleted(true);
    setIsTimerActive(false);
    
    // Calculate score
    let score = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    setTotalScore(score);
    
    // In a real app, you would store this in localStorage:
    // localStorage.setItem('quizScore', score.toString());
  };

  const restartQuiz = () => {
    setIsQuizStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTimeRemaining(20);
    setIsQuizCompleted(false);
    setSelectedAnswer('');
    setIsTimerActive(false);
    setTotalScore(0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'bg-green-500';
    if (score >= 5) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getScoreText = (score: number) => {
    if (score >= 7) return 'Xuất sắc!';
    if (score >= 5) return 'Khá tốt!';
    return 'Cần cố gắng thêm!';
  };

  // Welcome Screen - Show this when quiz hasn't started
  if (!isQuizStarted) {
    return (
      <div className="max-w-2xl mx-auto p-12">
        <Card className="text-center">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary rounded-full">
                <Play className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Quiz về Dân Chủ
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Kiểm tra kiến thức của bạn về các hệ thống dân chủ
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Câu hỏi</div>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">20s</div>
                  <div className="text-sm text-muted-foreground">Mỗi câu</div>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Điểm tối đa</div>
                </div>
              </div>
              
              <div className="text-left space-y-3 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Hướng dẫn:
                </h3>
                <ul className="text-sm space-y-2 text-muted-foreground ml-4">
                  <li>• Bạn có 20 giây để trả lời mỗi câu hỏi</li>
                  <li>• Chọn đáp án đúng nhất từ 4 phương án A, B, C, D</li>
                  <li>• Không thể quay lại câu hỏi trước đó</li>
                  <li>• Kết quả sẽ hiển thị sau khi hoàn thành tất cả câu hỏi</li>
                </ul>
              </div>
            </div>

            <Button 
              onClick={startQuiz} 
              size="lg" 
              className="w-full md:w-auto px-8 py-3 text-lg flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              Bắt đầu Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Results Screen
  if (isQuizCompleted) {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              Kết quả Quiz
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className={`mx-auto w-32 h-32 rounded-full ${getScoreColor(totalScore)} flex items-center justify-center text-white`}>
                <div className="text-center">
                  <div className="text-3xl font-bold">{totalScore}/8</div>
                  <div className="text-sm">điểm</div>
                </div>
              </div>
              <h2 className="text-2xl font-bold">{getScoreText(totalScore)}</h2>
              <p className="text-muted-foreground">
                Bạn đã trả lời đúng {totalScore} trên {questions.length} câu hỏi
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Chi tiết câu trả lời:</h3>
              <div className="space-y-3">
                {questions.map((question, index) => {
                  const userAnswer = answers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="text-left p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={isCorrect ? "default" : "destructive"}>
                          Câu {index + 1}
                        </Badge>
                        {isCorrect ? (
                          <span className="text-green-600 font-medium">Đúng</span>
                        ) : (
                          <span className="text-red-600 font-medium">Sai</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {question.question}
                      </p>
                      <div className="text-sm">
                        <p>Bạn chọn: <span className={isCorrect ? "text-green-600" : "text-red-600"}>{userAnswer || "Không trả lời"}</span></p>
                        {!isCorrect && (
                          <p>Đáp án đúng: <span className="text-green-600">{question.correctAnswer}</span></p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Button onClick={restartQuiz} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Làm lại Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Quiz Questions Screen
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header with progress */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Quiz Dân Chủ</h1>
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {timeRemaining}s
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Câu {currentQuestionIndex + 1} / {questions.length}</span>
            {/* <span>{Math.round(progress)}% hoàn thành</span> */}
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Câu {currentQuestionIndex + 1}: {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {selectedAnswer ? 'Đã chọn đáp án' : 'Chọn một đáp án để tiếp tục'}
            </div>
            <Button 
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="min-w-[120px]"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Timer Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Thời gian còn lại</span>
              <span className={timeRemaining <= 5 ? 'text-red-500 font-bold' : ''}>
                {timeRemaining}s
              </span>
            </div>
            <Progress 
              value={(timeRemaining / 20) * 100} 
              className={`h-2 ${timeRemaining <= 5 ? 'bg-red-100' : ''}`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}