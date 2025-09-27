import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface GameCard {
  id: number;
  text: string;
  category: 'bourgeois' | 'socialist';
  description: string;
}

const gameCards: GameCard[] = [
  { id: 1, text: "Đa nguyên, đa đảng", category: "bourgeois", description: "Nhiều đảng phái nhưng thực chất phục vụ lợi ích tư bản" },
  { id: 2, text: "Nguyên tắc tập trung dân chủ", category: "socialist", description: "Kết hợp lãnh đạo tập trung với quyền làm chủ của nhân dân" },
  { id: 3, text: "Tam quyền phân lập", category: "bourgeois", description: "Lập pháp, hành pháp, tư pháp tách biệt" },
  { id: 4, text: "Quyền lực thực sự thuộc về nhân dân", category: "socialist", description: "Nhân dân lao động thực sự làm chủ" },
  { id: 5, text: "Hình thức dân chủ", category: "bourgeois", description: "Quyền lực nhân dân chỉ mang tính biểu tượng" },
  { id: 6, text: "Liên minh công-nông-trí thức", category: "socialist", description: "Nòng cốt của quyền lực nhân dân" },
  { id: 7, text: "Bảo vệ chế độ tư hữu", category: "bourgeois", description: "Mục tiêu duy trì tư hữu tư bản chủ nghĩa" },
  { id: 8, text: "Xóa bỏ áp bức, bóc lột", category: "socialist", description: "Mục tiêu xây dựng xã hội công bằng" },
  { id: 9, text: "Cách mạng tư sản (thế kỷ XVII-XIX)", category: "bourgeois", description: "Bối cảnh ra đời của dân chủ tư sản" },
  { id: 10, text: "Cách mạng Tháng Mười 1917", category: "socialist", description: "Bối cảnh ra đời của dân chủ XHCN" },
  { id: 11, text: "Dân biết, dân bàn, dân làm", category: "socialist", description: "Phương châm dân chủ thực chất ở Việt Nam" },
  { id: 12, text: "Lợi ích giai cấp tư sản", category: "bourgeois", description: "Quyền lực phục vụ thiểu số giàu có" }
];

type GameState = 'playing' | 'checking' | 'finished';
type Category = 'bourgeois' | 'socialist';

export default function DemocracyGame() {
  const [cards, setCards] = useState<GameCard[]>(gameCards);
  const [droppedCards, setDroppedCards] = useState<{
    bourgeois: GameCard[];
    socialist: GameCard[];
  }>({
    bourgeois: [],
    socialist: []
  });
  const [gameState, setGameState] = useState<GameState>('playing');
  const [score, setScore] = useState<number>(0);
  const [draggedOver, setDraggedOver] = useState<Category | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: GameCard): void => {
    e.dataTransfer.setData('text/plain', JSON.stringify(card));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, category: Category): void => {
    e.preventDefault();
    setDraggedOver(category);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDraggedOver(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, category: Category): void => {
    e.preventDefault();
    setDraggedOver(null);
    
    try {
      const cardData: GameCard = JSON.parse(e.dataTransfer.getData('text/plain'));
      
      // Remove card from original position
      setCards(prev => prev.filter(card => card.id !== cardData.id));
      
      // Add to dropped cards
      setDroppedCards(prev => ({
        ...prev,
        [category]: [...prev[category], cardData]
      }));
    } catch (error) {
      console.error('Error parsing dragged data:', error);
    }
  };

  const handleRemoveCard = (cardId: number, category: Category): void => {
    if (gameState !== 'playing') return;
    
    const cardToRemove = droppedCards[category].find(card => card.id === cardId);
    if (!cardToRemove) return;
    
    setDroppedCards(prev => ({
      ...prev,
      [category]: prev[category].filter(card => card.id !== cardId)
    }));
    
    setCards(prev => [...prev, cardToRemove]);
  };

  const checkResults = (): void => {
    setGameState('checking');
    
    const allDroppedCards = [...droppedCards.bourgeois, ...droppedCards.socialist];
    const correctCards = droppedCards.bourgeois.filter(card => card.category === 'bourgeois').length +
                        droppedCards.socialist.filter(card => card.category === 'socialist').length;
    
    const totalDropped = allDroppedCards.length;
    const calculatedScore = totalDropped > 0 ? Math.round((correctCards / totalDropped) * 100) : 0;
    
    setScore(calculatedScore);
    setGameState('finished');
  };

  const resetGame = (): void => {
    setCards(gameCards);
    setDroppedCards({ bourgeois: [], socialist: [] });
    setGameState('playing');
    setScore(0);
    setDraggedOver(null);
  };

  const getCardStatus = (card: GameCard, category: Category): 'correct' | 'incorrect' | null => {
    if (gameState !== 'finished') return null;
    return card.category === category ? 'correct' : 'incorrect';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 pt-12 text-primary ">
             Game Phân Biệt Dân Chủ
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Kéo thả các đặc điểm vào đúng loại hình dân chủ
          </p>
          {gameState === 'finished' && (
            <Badge variant="outline" className="text-lg p-2">
              Điểm số: {score}/100
            </Badge>
          )}
        </div>

        {/* Drop Zones */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Bourgeois Democracy */}
          <div
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, 'bourgeois')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'bourgeois')}
            className="relative"
          >
            <Card className={`min-h-[300px] border-4 transition-all duration-200 ${
              draggedOver === 'bourgeois' 
                ? 'border-blue-500 bg-blue-200 shadow-lg' 
                : 'border-blue-300 bg-blue-50 hover:bg-blue-100'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🟦</span>
                  <h2 className="text-2xl font-bold text-blue-700">Dân Chủ Tư Sản</h2>
                </div>
                <p className="text-blue-600 mb-4">Thả các đặc điểm của dân chủ tư sản vào đây</p>
                
                <div className="space-y-2">
                  <AnimatePresence>
                    {droppedCards.bourgeois.map((card) => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative group"
                      >
                        <Card 
                          className={`cursor-pointer transition-all ${
                            getCardStatus(card, 'bourgeois') === 'correct' ? 'bg-green-100 border-green-400' :
                            getCardStatus(card, 'bourgeois') === 'incorrect' ? 'bg-red-100 border-red-400' :
                            'bg-white hover:bg-gray-50'
                          }`}
                          onClick={() => handleRemoveCard(card.id, 'bourgeois')}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{card.text}</span>
                              {gameState === 'finished' && (
                                getCardStatus(card, 'bourgeois') === 'correct' ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> :
                                <XCircle className="w-5 h-5 text-red-600" />
                              )}
                            </div>
                            {gameState === 'finished' && (
                              <p className="text-xs text-gray-600 mt-1">{card.description}</p>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Socialist Democracy */}
          <div
            onDragOver={handleDragOver}
            onDragEnter={(e) => handleDragEnter(e, 'socialist')}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'socialist')}
            className="relative"
          >
            <Card className={`min-h-[300px] border-4 transition-all duration-200 ${
              draggedOver === 'socialist' 
                ? 'border-red-500 bg-red-200 shadow-lg' 
                : 'border-red-300 bg-red-50 hover:bg-red-100'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">🟥</span>
                  <h2 className="text-2xl font-bold text-red-700">Dân Chủ XHCN</h2>
                </div>
                <p className="text-red-600 mb-4">Thả các đặc điểm của dân chủ xã hội chủ nghĩa vào đây</p>
                
                <div className="space-y-2">
                  <AnimatePresence>
                    {droppedCards.socialist.map((card) => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative group"
                      >
                        <Card 
                          className={`cursor-pointer transition-all ${
                            getCardStatus(card, 'socialist') === 'correct' ? 'bg-green-100 border-green-400' :
                            getCardStatus(card, 'socialist') === 'incorrect' ? 'bg-red-100 border-red-400' :
                            'bg-white hover:bg-gray-50'
                          }`}
                          onClick={() => handleRemoveCard(card.id, 'socialist')}
                        >
                          <CardContent className="p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{card.text}</span>
                              {gameState === 'finished' && (
                                getCardStatus(card, 'socialist') === 'correct' ? 
                                <CheckCircle className="w-5 h-5 text-green-600" /> :
                                <XCircle className="w-5 h-5 text-red-600" />
                              )}
                            </div>
                            {gameState === 'finished' && (
                              <p className="text-xs text-gray-600 mt-1">{card.description}</p>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Available Cards */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">📝 Các đặc điểm cần phân loại:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <AnimatePresence>
                {cards.map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="cursor-move"
                  >
                    <Card 
                      className="bg-yellow-50 border-yellow-300 hover:bg-yellow-100 transition-colors hover:shadow-md"
                      draggable={gameState === 'playing'}
                      onDragStart={(e) => handleDragStart(e, card)}
                    >
                      <CardContent className="p-3">
                        <span className="text-sm font-medium select-none">{card.text}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>

        {/* Game Controls */}
        <div className="flex justify-center gap-4">
          {gameState === 'playing' && (
            <Button 
              onClick={checkResults}
              disabled={cards.length === gameCards.length}
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
            >
              🎯 Kiểm tra kết quả
            </Button>
          )}
          
          {gameState === 'finished' && (
            <Button 
              onClick={resetGame}
              variant="outline"
              className="border-gray-400"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Chơi lại
            </Button>
          )}
        </div>

        {/* Instructions */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h4 className="font-bold mb-2">📖 Hướng dẫn chơi:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Kéo thả các thẻ đặc điểm vào đúng loại hình dân chủ</li>
              <li>• Nhấp vào thẻ đã thả để đưa về vị trí ban đầu</li>
              <li>• Nhấn "Kiểm tra kết quả" khi hoàn thành</li>
              <li>• Thẻ xanh = đúng, thẻ đỏ = sai</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}