import { Suspense } from "react";
import { CardContent } from "@/components/ui/card";
import FlashcardContainer from "./FlashcardContainer";

const mockFlashcards = [
    {
        id: 1,
        front: "Hello",
        back: "你好",
        pinyin: "Nǐ hǎo",
        character: "你好",
        example: "你好，我叫小明。 (Hello, my name is Xiao Ming.)",
    },
    {
        id: 2,
        front: "Thank you",
        back: "谢谢",
        pinyin: "Xièxiè",
        character: "谢谢",
        example: "谢谢你的帮助。 (Thank you for your help.)",
    },
    {
        id: 3,
        front: "Goodbye",
        back: "再见",
        pinyin: "Zàijiàn",
        character: "再见",
        example: "再见，明天见。 (Goodbye, see you tomorrow.)",
    },
];

export default function FlashcardsPage() {
  return (
    <CardContent>
      <Suspense fallback={<div>Loading flashcards...</div>}>
        <FlashcardContainer initialCards={mockFlashcards} />
      </Suspense>
    </CardContent>
  );
}



// "use client";
// import RequiredText from "@components/RequiredText";
// import { Button } from "@components/ui/button";
// import { CardContent, Card, CardHeader, CardTitle, CardFooter, CardDescription } from "@components/ui/card";
// import { DialogHeader, DialogFooter } from "@components/ui/dialog";
// import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@components/ui/dialog";
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@components/ui/dropdown-menu";
// import { Label } from "@radix-ui/react-label";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@components/ui/select";
// import { AnimatePresence, motion } from "framer-motion";
// import { Grid, List, Plus, BookOpen, Search, Edit, Volume2 } from "lucide-react";
// import { Input } from "@components/ui/input";
// import { useState } from "react";

// const mockFlashcards = [
//     {
//         id: 1,
//         front: "Hello",
//         back: "你好",
//         pinyin: "Nǐ hǎo",
//         character: "你好",
//         example: "你好，我叫小明。 (Hello, my name is Xiao Ming.)",
//     },
//     {
//         id: 2,
//         front: "Thank you",
//         back: "谢谢",
//         pinyin: "Xièxiè",
//         character: "谢谢",
//         example: "谢谢你的帮助。 (Thank you for your help.)",
//     },
//     {
//         id: 3,
//         front: "Goodbye",
//         back: "再见",
//         pinyin: "Zàijiàn",
//         character: "再见",
//         example: "再见，明天见。 (Goodbye, see you tomorrow.)",
//     },
// ];

// export default function FlashcardDisplay() {
//     const [flashcards, setFlashcards] = useState(mockFlashcards)
//     const [isGridView, setIsGridView] = useState(true)
//     const [searchTerm, setSearchTerm] = useState("")
//     const [sortBy, setSortBy] = useState("recent")
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false)
//     const [currentEditCard, setCurrentEditCard] = useState(null)
//     const [isStudyMode, setIsStudyMode] = useState(false)
//     const [currentStudyCardIndex, setCurrentStudyCardIndex] = useState(0)
//     const [revealedFaces, setRevealedFaces] = useState<string[]>([])
//     const [showOptionalFields, setShowOptionalFields] = useState(false)
  
//     const filteredCards = flashcards.filter(
//       card =>
//         card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         card.back.toLowerCase().includes(searchTerm.toLowerCase())
//     )
  
//     const sortedCards = [...filteredCards].sort((a, b) => {
//       if (sortBy === "recent") return b.id - a.id
//       // Add more sorting options here
//       return 0
//     })
  
//     const handleAddCard = (newCard) => {
//       setFlashcards([...flashcards, { id: flashcards.length + 1, ...newCard }])
//       setIsEditModalOpen(false)
//       setShowOptionalFields(false)
//     }
  
//     const handleEditCard = (updatedCard) => {
//       setFlashcards(flashcards.map(card => card.id === updatedCard.id ? updatedCard : card))
//       setIsEditModalOpen(false)
//       setShowOptionalFields(false)
//     }
  
//     const handleDeleteCard = (id) => {
//       setFlashcards(flashcards.filter(card => card.id !== id))
//     }
  
//     const handleStudyNext = () => {
//       setRevealedFaces([])
//       setCurrentStudyCardIndex((prevIndex) => (prevIndex + 1) % sortedCards.length)
//     }
  
//     const handleStudyPrev = () => {
//       setRevealedFaces([])
//       setCurrentStudyCardIndex((prevIndex) => (prevIndex - 1 + sortedCards.length) % sortedCards.length)
//     }
  
//     const toggleReveal = (face: string) => {
//       setRevealedFaces(prev => 
//         prev.includes(face) ? prev.filter(f => f !== face) : [...prev, face]
//       )
//     }
//     return (
//         <CardContent>
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex space-x-2">
//               <Button onClick={() => setIsGridView(true)} variant={isGridView ? "default" : "outline"}>
//                 <Grid className="w-4 h-4 mr-2" />
//                 Grid
//               </Button>
//               <Button onClick={() => setIsGridView(false)} variant={!isGridView ? "default" : "outline"}>
//                 <List className="w-4 h-4 mr-2" />
//                 List
//               </Button>
//             </div>
//             <div className="flex space-x-2">
//               <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
//                 <DialogTrigger asChild>
//                   <Button onClick={() => {
//                     setCurrentEditCard(null)
//                     setShowOptionalFields(false)
//                   }}>
//                     <Plus className="w-4 h-4 mr-2" />
//                     Add Flashcard
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                   <DialogHeader>
//                     <DialogTitle>{currentEditCard ? "Edit Flashcard" : "Add New Flashcard"}</DialogTitle>
//                     <DialogDescription>
//                       {currentEditCard ? "Edit the flashcard details below." : "Create a new flashcard for your set."}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <form onSubmit={(e) => {
//                     e.preventDefault()
//                     const formData = new FormData(e.target)
//                     const newCard = Object.fromEntries(formData)
//                     if (currentEditCard) {
//                       handleEditCard({ ...currentEditCard, ...newCard })
//                     } else {
//                       handleAddCard(newCard)
//                     }
//                   }}>
//                     <div className="grid gap-4 py-4">
//                       <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="front" className="text-right">
//                           <RequiredText>Front</RequiredText>
//                         </Label>
//                         <Input
//                           id="front"
//                           name="front"
//                           defaultValue={currentEditCard?.front}
//                           className="col-span-3"
//                         />
//                       </div>
//                       <div className="grid grid-cols-4 items-center gap-4">
//                         <Label htmlFor="back" className="text-right">
//                         <RequiredText>Back</RequiredText>
//                         </Label>
//                         <Input
//                           id="back"
//                           name="back"
//                           defaultValue={currentEditCard?.back}
//                           className="col-span-3"
//                         />
//                       </div>
//                       {(showOptionalFields || currentEditCard) && (
//                         <>
//                           <div className="grid grid-cols-4 items-center gap-4">
//                             <Label htmlFor="pinyin" className="text-right">
//                               Pinyin
//                             </Label>
//                             <Input
//                               id="pinyin"
//                               name="pinyin"
//                               defaultValue={currentEditCard?.pinyin}
//                               className="col-span-3"
//                             />
//                           </div>
//                           <div className="grid grid-cols-4 items-center gap-4">
//                             <Label htmlFor="character" className="text-right">
//                               Character
//                             </Label>
//                             <Input
//                               id="character"
//                               name="character"
//                               defaultValue={currentEditCard?.character}
//                               className="col-span-3"
//                             />
//                           </div>
//                           <div className="grid grid-cols-4 items-center gap-4">
//                             <Label htmlFor="example" className="text-right">
//                               Example
//                             </Label>
//                             <Input
//                               id="example"
//                               name="example"
//                               defaultValue={currentEditCard?.example}
//                               className="col-span-3"
//                             />
//                           </div>
//                         </>
//                       )}
//                     </div>
//                     {!showOptionalFields && !currentEditCard && (
//                       <Button type="button" variant="outline" onClick={() => setShowOptionalFields(true)}>
//                         Add Optional Fields
//                       </Button>
//                     )}
//                     <DialogFooter>
//                       <Button type="submit">{currentEditCard ? "Save Changes" : "Add Flashcard"}</Button>
//                     </DialogFooter>
//                   </form>
//                 </DialogContent>
//               </Dialog>
//               <Button onClick={() => setIsStudyMode(true)}>
//                 <BookOpen className="w-4 h-4 mr-2" />
//                 Study Flashcards
//               </Button>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <div className="relative w-full max-w-sm">
//               <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search flashcards..."
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <Select value={sortBy} onValueChange={setSortBy}>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="recent">Recently Added</SelectItem>
//                 <SelectItem value="alphabetical">Alphabetical</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           {isStudyMode ? (
//             <div className="flex flex-col items-center justify-center space-y-4">
//               <Card className="w-full max-w-md">
//                 <CardHeader>
//                   <CardTitle>{sortedCards[currentStudyCardIndex].front}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-2">
//                   <AnimatePresence>
//                     {revealedFaces.includes('back') && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <p><strong>Back:</strong> {sortedCards[currentStudyCardIndex].back}</p>
//                       </motion.div>
//                     )}
//                     {revealedFaces.includes('pinyin') && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <p><strong>Pinyin:</strong> {sortedCards[currentStudyCardIndex].pinyin}</p>
//                       </motion.div>
//                     )}
//                     {revealedFaces.includes('character') && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <p><strong>Character:</strong> {sortedCards[currentStudyCardIndex].character}</p>
//                       </motion.div>
//                     )}
//                     {revealedFaces.includes('example') && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <p><strong>Example:</strong> {sortedCards[currentStudyCardIndex].example}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </CardContent>
//                 <CardFooter className="flex flex-wrap gap-2">
//                   <Button onClick={() => toggleReveal('back')} variant="outline">
//                     {revealedFaces.includes('back') ? 'Hide' : 'Reveal'} Back
//                   </Button>
//                   <Button onClick={() => toggleReveal('pinyin')} variant="outline">
//                     {revealedFaces.includes('pinyin') ? 'Hide' : 'Reveal'} Pinyin
//                   </Button>
//                   <Button onClick={() => toggleReveal('character')} variant="outline">
//                     {revealedFaces.includes('character') ? 'Hide' : 'Reveal'} Character
//                   </Button>
//                   <Button onClick={() => toggleReveal('example')} variant="outline">
//                     {revealedFaces.includes('example') ? 'Hide' : 'Reveal'} Example
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <div className="flex space-x-4">
//                 <Button onClick={handleStudyPrev}>Previous</Button>
//                 <Button onClick={handleStudyNext}>Next</Button>
//               </div>
//               <Button variant="outline" onClick={() => setIsStudyMode(false)}>Exit Study Mode</Button>
//             </div>
//           ) : (
//             <div className={`grid gap-4 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
//               {sortedCards.map((card) => (
//                 <Card key={card.id} className="flex flex-col">
//                   <CardHeader>
//                     <CardTitle className="flex justify-between items-center">
//                       <span>{card.front}</span>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button variant="ghost" className="h-8 w-8 p-0">
//                             <span className="sr-only">Open menu</span>
//                             <Edit className="h-4 w-4" />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                           <DropdownMenuItem onClick={() => {
//                             setCurrentEditCard(card)
//                             setIsEditModalOpen(true)
                          
//                           }}>
//                             Edit
//                           </DropdownMenuItem>
//                           <DropdownMenuItem onClick={() => handleDeleteCard(card.id)}>
//                             Delete
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </CardTitle>
//                     <CardDescription>{card.back}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p><strong>Pinyin:</strong> {card.pinyin}</p>
//                     <p><strong>Character:</strong> {card.character}</p>
//                     <p><strong>Example:</strong> {card.example}</p>
//                   </CardContent>
//                   <CardFooter className="mt-auto">
//                     <Button variant="outline" className="w-full">
//                       <Volume2 className="w-4 h-4 mr-2" />
//                       Listen
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </CardContent>
//     );
// }
