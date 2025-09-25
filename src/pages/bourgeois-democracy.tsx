import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BourgeoisDemocracy = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary md:text-4xl">Dân chủ tư sản</h1>
                <p className="text-muted-foreground mt-2">
                    Tìm hiểu về hình thức dân chủ đầu tiên trong lịch sử và những đặc điểm của nó trong xã hội tư bản chủ nghĩa
                </p>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <Card className="border-none shadow-none">
                    <CardContent className="p-0 text-left">
                        <h2 className="text-2xl font-semibold mb-4">Dân chủ tư sản là gì?</h2>
                        <p className="text-base mb-4">
                            Dân chủ tư sản là hình thức dân chủ ra đời cùng với sự phát triển của chủ nghĩa tư bản, 
                            được hình thành qua các cuộc Cách mạng tư sản như Cách mạng Anh (1640-1688), 
                            Cách mạng Mỹ (1776) và Cách mạng Pháp (1789).
                        </p>
                        <h3 className="text-xl font-medium mb-2">Đặc điểm cơ bản:</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>
                                <strong className="text-primary">Đa nguyên đa đảng</strong> - Nhiều đảng phái cạnh tranh trong bầu cử
                            </li>
                            <li>
                                <strong className="text-primary">Tam quyền phân lập</strong> - Phân chia quyền lực thành lập pháp, hành pháp, tư pháp
                            </li>
                            <li>
                                <strong className="text-primary">Tự do cá nhân</strong> - Bảo đảm các quyền tự do cơ bản của công dân
                            </li>
                            <li>
                                <strong className="text-primary">Bản chất giai cấp</strong> - Quyền lực thực chất thuộc về giai cấp tư sản
                            </li>
                        </ul>
                        <p className="text-base">
                            Mặc dù tuyên bố quyền lực thuộc về nhân dân, dân chủ tư sản có bản chất giai cấp rõ rệt, 
                            phục vụ lợi ích của giai cấp tư sản và duy trì chế độ tư hữu về tư liệu sản xuất.
                        </p>
                    </CardContent>
                </Card>
                {/* Right Column - Image */}
                <div className="flex items-center justify-center">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden">
                        <img
                            src="/images/bourgeois.jpg"
                            alt="Bourgeois Democracy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <Separator className="my-10" />

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-6">Thông Tin Chi Tiết Về Dân Chủ Tư Sản</h2>

                <Tabs defaultValue="historical-context" className="w-full text-left">
                    <TabsList className="grid grid-cols-5 mb-8">
                        <TabsTrigger value="historical-context">Bối cảnh lịch sử</TabsTrigger>
                        <TabsTrigger value="concept-nature">Khái niệm & bản chất</TabsTrigger>
                        <TabsTrigger value="basic-features">Đặc điểm cơ bản</TabsTrigger>
                        <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
                        <TabsTrigger value="practical-examples">Ví dụ thực tiễn</TabsTrigger>
                    </TabsList>

                    <TabsContent value="historical-context" className="border rounded-lg p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-primary">Bối cảnh lịch sử và thời gian ra đời</h3>
                            <p>
                                Dân chủ tư sản ra đời cùng với sự phát triển của chủ nghĩa tư bản, được hình thành qua các cuộc 
                                Cách mạng tư sản lịch sử từ thế kỷ 17-18.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-6">Các mốc lịch sử quan trọng</h4>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li><strong>Cách mạng Anh (1640-1688)</strong> - Đặt nền móng cho chế độ quân chủ lập hiến</li>
                                <li><strong>Cách mạng Mỹ (1776)</strong> - Tuyên bố Độc lập và các nguyên tắc dân chủ</li>
                                <li><strong>Cách mạng Pháp (1789)</strong> - Tuyên ngôn Nhân quyền và Dân quyền</li>
                                <li><strong>Thế kỷ 19-20</strong> - Lan rộng ra các nước tư bản phát triển</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">Ý nghĩa lịch sử</h4>
                            <p>
                                Dân chủ tư sản đánh dấu bước tiến quan trọng so với chế độ phong kiến chuyên chế, 
                                khẳng định nguyên tắc "quyền lực thuộc về nhân dân" và các quyền tự do cơ bản của con người.
                            </p>
                            
                            <p className="mt-4">
                                Tuy nhiên, từ góc độ giai cấp, đây là sự chuyển giao quyền lực từ tầng lớp phong kiến 
                                sang giai cấp tư sản mới nổi, chứ không phải sự giải phóng thực sự của nhân dân lao động.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="concept-nature" className="border rounded-lg p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-primary">Khái niệm & bản chất giai cấp</h3>
                            
                            <h4 className="text-lg font-medium">Khái niệm</h4>
                            <p>
                                Dân chủ tư sản là hình thức tổ chức chính trị của xã hội tư bản chủ nghĩa, 
                                trong đó quyền lực nhà nước hình thức thuộc về nhân dân nhưng thực chất được chi phối bởi giai cấp tư sản.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-6">Bản chất giai cấp</h4>
                            <p>
                                Bản chất của dân chủ tư sản được thể hiện rõ qua những đặc điểm sau:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Quyền lực thực chất thuộc về giai cấp tư sản</strong> - Mặc dù tuyên bố "quyền lực thuộc về nhân dân"
                                </li>
                                <li>
                                    <strong>Phục vụ lợi ích tư bản</strong> - Bảo vệ chế độ tư hữu và quyền lợi của nhà tư bản
                                </li>
                                <li>
                                    <strong>Dân chủ hình thức</strong> - Chỉ dân chủ về mặt thủ tục, không dân chủ về bản chất
                                </li>
                                <li>
                                    <strong>Bóc lột hợp pháp hóa</strong> - Che đậy sự bóc lột của tư bản đối với lao động
                                </li>
                            </ul>
                            
                            <p className="mt-4">
                                Tiền bạc và quyền lực kinh tế quyết định sức ảnh hưởng chính trị. 
                                Những người giàu có nhiều khả năng tham gia chính trị và định hướng chính sách hơn người lao động.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="basic-features" className="border rounded-lg p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-primary">Đặc điểm cơ bản</h3>
                            
                            <h4 className="text-lg font-medium">1. Đa nguyên đa đảng</h4>
                            <p>
                                Nhiều đảng phái chính trị cạnh tranh trong các cuộc bầu cử, tạo ra sự lựa chọn cho cử tri.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Ví dụ: Đảng Dân chủ và Đảng Cộng hòa tại Mỹ</li>
                                <li>Các đảng đại diện cho các nhóm lợi ích khác nhau trong xã hội</li>
                                <li>Cạnh tranh thông qua bầu cử định kỳ</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">2. Tam quyền phân lập</h4>
                            <p>Phân chia quyền lực nhà nước thành ba nhánh độc lập:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Quyền lập pháp:</strong> Quốc hội, Nghị viện - ban hành luật</li>
                                <li><strong>Quyền hành pháp:</strong> Chính phủ, Tổng thống - thi hành luật</li>
                                <li><strong>Quyền tư pháp:</strong> Tòa án - xét xử và giám sát việc tuân thủ luật</li>
                                <li>Mục đích: Kiềm chế và cân bằng quyền lực, tránh độc tài</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">3. Tự do cá nhân</h4>
                            <p>Bảo đảm các quyền tự do cơ bản của công dân:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Tự do ngôn luận và báo chí</li>
                                <li>Tự do tín ngương</li>
                                <li>Quyền tập hợp, biểu tình hòa bình</li>
                                <li>Quyền bầu cử và ứng cử</li>
                                <li>Quyền tư hữu được bảo vệ</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">4. Hạn chế của dân chủ tư sản</h4>
                            <p>
                                Mặc dù có những tiến bộ, dân chủ tư sản vẫn có những hạn chế cơ bản do bản chất giai cấp của nó.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="objectives" className="border rounded-lg p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-primary">Mục tiêu của Dân chủ Tư sản</h3>
                            
                            <h4 className="text-lg font-medium">1. Bảo vệ chế độ tư hữu</h4>
                            <p>
                                Mục tiêu cốt lõi là duy trì và bảo vệ quyền tư hữu về tư liệu sản xuất, 
                                tạo môi trường pháp lý thuận lợi cho hoạt động kinh doanh của tư bản.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-6">2. Duy trì trật tự xã hội tư bản</h4>
                            <p>Đảm bảo sự ổn định cho:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hệ thống thị trường tự do</li>
                                <li>Cạnh tranh công bằng (về hình thức)</li>
                                <li>Quyền lợi của nhà đầu tư và doanh nghiệp</li>
                                <li>Môi trường kinh doanh thuận lợi</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">3. Hợp thức hóa sự bất bình đẳng</h4>
                            <p>
                                Thông qua các cơ chế dân chủ hình thức, hợp thức hóa sự phân hóa giai cấp 
                                và bất bình đẳng xã hội trong xã hội tư bản chủ nghĩa.
                            </p>
                            
                            <h4 className="text-lg font-medium mt-6">4. Mở rộng thị trường và ảnh hưởng</h4>
                            <p>
                                Sử dụng các giá trị dân chủ để mở rộng thị trường và ảnh hưởng địa chính trị, 
                                phục vụ lợi ích kinh tế của các tập đoàn đa quốc gia.
                            </p>
                            
                            <p className="mt-6 p-4 bg-orange-50 rounded-lg">
                                <strong>Lưu ý:</strong> Các mục tiêu này thường được bao bọc bởi những tuyên bố cao đẹp 
                                về dân chủ, tự do và nhân quyền, nhưng bản chất vẫn là phục vụ lợi ích giai cấp tư sản.
                            </p>
                        </div>
                    </TabsContent>

                    <TabsContent value="practical-examples" className="border rounded-lg p-6">
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-primary">Ví dụ thực tiễn</h3>
                            
                            <h4 className="text-lg font-medium">Hệ thống bầu cử Mỹ</h4>
                            <p>
                                Hệ thống dân chủ hai đảng với những đặc điểm tiêu biểu của dân chủ tư sản:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Chi phí vận động tranh cử khổng lồ, ưu tiên ứng viên giàu có</li>
                                <li>Các tập đoàn lớn tài trợ chiến dịch và ảnh hưởng chính sách</li>
                                <li>Hệ thống đại cử tri có thể đi ngược lại ý chí đa số</li>
                                <li>Gerrymandering - vẽ lại ranh giới khu vực bầu cử để có lợi cho đảng cầm quyền</li>
                                <li>Quyền lực thực sự nằm trong tay các nhóm lobby và tập đoàn lớn</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">Khủng hoảng tài chính 2008</h4>
                            <p>
                                Cuộc khủng hoảng này bộc lộ rõ bản chất của dân chủ tư sản:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Các ngân hàng lớn gây ra khủng hoảng nhưng được chính phủ giải cứu</li>
                                <li>Hàng triệu người dân mất nhà, mất việc làm</li>
                                <li>Chính sách "quá lớn để sụp đổ" - ưu tiên bảo vệ tư bản lớn</li>
                                <li>Người nghèo chịu hậu quả nặng nề nhất</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">Phong trào Áo vàng ở Pháp</h4>
                            <p>
                                Phản ánh sự bất mãn với dân chủ tư sản:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Người dân phản đối chính sách thuế có lợi cho người giàu</li>
                                <li>Yêu cầu dân chủ trực tiếp hơn thông qua trưng cầu dân ý</li>
                                <li>Phản đối sự cách biệt giữa tầng lớp cầm quyền và dân thường</li>
                                <li>Đòi hỏi công bằng xã hội thực sự</li>
                            </ul>
                            
                            <h4 className="text-lg font-medium mt-6">Bất bình đẳng kinh tế gia tăng</h4>
                            <p>
                                Các nước dân chủ tư sản phát triển đều chứng kiến:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Khoảng cách giàu nghèo ngày càng lớn</li>
                                <li>Tầng lớp trung lưu bị thu hẹp</li>
                                <li>Quyền lực chính trị tập trung vào tay giới siêu giàu</li>
                                <li>Các chính sách có xu hướng ưu tiên tư bản hơn lao động</li>
                            </ul>
                            
                            <p className="mt-6 p-4 bg-red-50 rounded-lg">
                                <strong>Bài học:</strong> Dân chủ tư sản tuy có những tiến bộ so với chế độ phong kiến, 
                                nhưng bản chất giai cấp của nó làm hạn chế khả năng thực hiện dân chủ thực sự và công bằng xã hội.
                            </p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default BourgeoisDemocracy;