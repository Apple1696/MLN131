import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SociallistDemocracy = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-primary md:text-4xl">Dân chủ xã hội chủ nghĩa</h1>
                <p className="text-muted-foreground mt-2">
                    Tìm hiểu về hình thức dân chủ kiểu mới và vai trò của nó trong xây dựng xã hội công bằng, dân chủ, văn minh
                </p>
            </div>

            <Separator className="my-6" />

            <div className="grid text-left grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <Card className="border-none shadow-none">
                    <CardContent className="p-0">
                        <h2 className="text-2xl text-left font-semibold mb-4">Dân chủ xã hội chủ nghĩa là gì?</h2>
                        <p className="text-left mb-4">
                            Dân chủ xã hội chủ nghĩa là hình thức dân chủ kiểu mới ra đời sau Cách mạng Tháng Mười Nga năm 1917,
                            do giai cấp công nhân lãnh đạo. Đây là nền dân chủ do nhân dân lao động làm chủ,
                            dưới sự lãnh đạo của giai cấp công nhân và Đảng Cộng sản.
                        </p>
                        <h3 className="text-xl font-medium mb-2">Đặc điểm cơ bản:</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>
                                <strong className="text-primary">Nguyên tắc tập trung dân chủ</strong> - Kết hợp sự lãnh đạo tập trung với việc phát huy quyền làm chủ của nhân dân
                            </li>
                            <li>
                                <strong className="text-primary">Quyền lực thuộc về nhân dân</strong> - Tham gia trực tiếp hoặc gián tiếp qua các cơ quan dân cử
                            </li>
                            <li>
                                <strong className="text-primary">Gắn chính trị với kinh tế - xã hội</strong> - Không chỉ ở lá phiếu mà còn ở các quyền cơ bản như học tập, y tế, việc làm
                            </li>
                            <li>
                                <strong className="text-primary">Dân chủ thực chất</strong> - Người dân có quyền giám sát và bãi nhiệm đại biểu không xứng đáng
                            </li>
                        </ul>
                        <p className="text-base">
                            Mục tiêu của dân chủ xã hội chủ nghĩa là xóa bỏ áp bức, bóc lột, xây dựng xã hội công bằng - dân chủ - văn minh,
                            đặt lợi ích cộng đồng và hạnh phúc con người làm trung tâm thay vì lợi nhuận.
                        </p>
                    </CardContent>
                </Card>
                {/* Right Column - Image */}
                <div className="flex items-center justify-center">
                    <div className="rounded-lg w-full h-[400px] overflow-hidden">
                        <img
                            src="/images/socialist-democracy/e-Democracy.jpg"
                            alt="Socialist Democracy"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <Separator className="my-10" />

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Thông Tin Chi Tiết Về Dân Chủ Xã Hội Chủ Nghĩa</h2>

                <Tabs defaultValue="historical-context" className="w-full text-left">
                    <TabsList className="grid grid-cols-5 mb-8 ">
                        <TabsTrigger value="historical-context">Bối cảnh lịch sử</TabsTrigger>
                        <TabsTrigger value="concept-nature">Khái niệm & bản chất</TabsTrigger>
                        <TabsTrigger value="basic-features">Đặc điểm cơ bản</TabsTrigger>
                        <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
                        <TabsTrigger value="practical-examples">Ví dụ thực tiễn</TabsTrigger>
                    </TabsList>

                    <TabsContent value="historical-context" className="border rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Column - Text Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-primary">Bối cảnh lịch sử và thời gian ra đời</h3>
                                <p>
                                    Dân chủ xã hội chủ nghĩa ra đời sau Cách mạng Tháng Mười Nga năm 1917 do giai cấp công nhân lãnh đạo.
                                    Đây là nền dân chủ kiểu mới, phủ định dân chủ tư sản, mở đầu thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội.
                                </p>

                                <h4 className="text-lg font-medium mt-6">Quá trình lan rộng sau Thế chiến II</h4>
                                <p>Sau Thế chiến thứ hai, mô hình dân chủ xã hội chủ nghĩa đã lan rộng ra nhiều quốc gia trên thế giới:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li><strong>Trung Quốc</strong> - năm 1949</li>
                                    <li><strong>Việt Nam</strong> - năm 1945 (miền Bắc) và 1976 (cả nước)</li>
                                    <li><strong>Cuba</strong> - năm 1959</li>
                                    <li>Và nhiều quốc gia khác trong khối xã hội chủ nghĩa</li>
                                </ul>

                                <p className="mt-4">
                                    Sự ra đời và phát triển của dân chủ xã hội chủ nghĩa đánh dấu một bước ngoặt quan trọng trong lịch sử
                                    phát triển của nhân loại, tạo ra một con đường mới để xây dựng xã hội công bằng và dân chủ.
                                </p>
                            </div>

                            {/* Right Column - Historical Image */}
                            <div className="flex items-center justify-center">
                                <div className="rounded-lg w-full h-[300px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/origin1.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="concept-nature" className="border rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Column - Text Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-primary">Khái niệm & bản chất giai cấp</h3>

                                <h4 className="text-lg font-medium">Khái niệm</h4>
                                <p>
                                    Dân chủ xã hội chủ nghĩa là dân chủ do nhân dân lao động làm chủ, dưới sự lãnh đạo của giai cấp công nhân
                                    và Đảng Cộng sản. Đây là hình thức dân chủ mới, khác biệt căn bản với dân chủ tư sản.
                                </p>

                                <h4 className="text-lg font-medium mt-6">Bản chất giai cấp</h4>
                                <p>
                                    Bản chất của dân chủ xã hội chủ nghĩa thể hiện ở những điểm sau:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Quyền lực chính trị thuộc về nhân dân</strong> - Nòng cốt là liên minh công – nông – trí thức
                                    </li>
                                    <li>
                                        <strong>Mục tiêu xóa bỏ áp bức, bóc lột</strong> - Hướng tới xây dựng xã hội không có giai cấp
                                    </li>
                                    <li>
                                        <strong>Bảo đảm công bằng xã hội</strong> - Tạo điều kiện cho mọi người dân được phát triển toàn diện
                                    </li>
                                </ul>

                                <p className="mt-4">
                                    Khác với dân chủ tư sản chỉ mang tính hình thức, dân chủ xã hội chủ nghĩa hướng tới việc
                                    thực hiện dân chủ thực chất, đảm bảo quyền lợi thiết thực của nhân dân lao động.
                                </p>
                            </div>

                            {/* Right Column - Image Placeholders */}
                            <div className="space-y-4">
                                {/* First Image Placeholder */}
                                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/nongdan.webp"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Second Image Placeholder */}
                                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/nongdan2.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="basic-features" className="border rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Column - Text Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-primary">Đặc điểm cơ bản</h3>

                                <h4 className="text-lg font-medium">1. Nguyên tắc tập trung dân chủ</h4>
                                <p>
                                    Kết hợp sự lãnh đạo tập trung của Đảng với việc phát huy quyền làm chủ của nhân dân.
                                    Đảm bảo thống nhất ý chí và hành động trong khi tôn trọng quyền dân chủ.
                                </p>

                                <h4 className="text-lg font-medium mt-6">2. Quyền lực thực sự thuộc về nhân dân</h4>
                                <p>Nhân dân tham gia quyền lực thông qua nhiều hình thức:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Trực tiếp qua các cuộc họp dân, hội nghị nhân dân</li>
                                    <li>Gián tiếp qua Quốc hội, Hội đồng nhân dân các cấp</li>
                                    <li>Thông qua các tổ chức chính trị - xã hội</li>
                                    <li>Bằng trưng cầu ý dân về các vấn đề quan trọng</li>
                                </ul>

                                <h4 className="text-lg font-medium mt-6">3. Gắn chính trị với kinh tế – xã hội</h4>
                                <p>
                                    Dân chủ không chỉ thể hiện ở lá phiếu bầu cử mà còn ở việc bảo đảm các quyền cơ bản của người dân:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Quyền được học tập, giáo dục</li>
                                    <li>Quyền được chăm sóc y tế</li>
                                    <li>Quyền có việc làm</li>
                                    <li>Quyền hưởng phúc lợi xã hội</li>
                                </ul>

                                <h4 className="text-lg font-medium mt-6">4. Dân chủ thực chất</h4>
                                <p>
                                    Nhân dân không chỉ có quyền bầu cử mà còn có quyền giám sát và bãi nhiệm những đại biểu
                                    không xứng đáng. Các chính sách an sinh xã hội được bảo đảm thực hiện.
                                </p>
                            </div>

                            {/* Right Column - Image Placeholders */}
                            <div className="space-y-4">
                                {/* First Image Placeholder */}
                                <div className="rounded-lg w-full h-[300px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/quochoi.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Second Image Placeholder */}
                                <div className="rounded-lg w-full h-[300px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/kiniem.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>



                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="objectives" className="border rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Column - Text Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-medium text-primary">Mục tiêu của Dân chủ Xã hội chủ nghĩa</h3>

                                <h4 className="text-lg font-medium">1. Xóa bỏ áp bức, bóc lột</h4>
                                <p>
                                    Mục tiêu cốt lõi là xóa bỏ mọi hình thức áp bức và bóc lột con người bởi con người.
                                    Xây dựng xã hội mà trong đó không còn sự phân hóa giai cấp, không còn người giàu bóc lột người nghèo.
                                </p>

                                <h4 className="text-lg font-medium mt-6">2. Xây dựng xã hội công bằng – dân chủ – văn minh</h4>
                                <p>Hướng tới xã hội có các đặc trưng:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Công bằng:</strong> Mọi người dân đều có cơ hội phát triển bình đẳng</li>
                                    <li><strong>Dân chủ:</strong> Nhân dân thực sự là chủ nhân của đất nước</li>
                                    <li><strong>Văn minh:</strong> Phát triển toàn diện về vật chất và tinh thần</li>
                                </ul>

                                <h4 className="text-lg font-medium mt-6">3. Lấy con người làm trung tâm</h4>
                                <p>
                                    Đặt lợi ích cộng đồng và hạnh phúc con người làm trung tâm của mọi chính sách,
                                    thay vì lợi nhuận như trong xã hội tư bản chủ nghĩa.
                                </p>

                            </div>

                            {/* Right Column - Image Placeholders */}
                            <div className="space-y-4">
                                {/* First Image Placeholder */}
                                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/protest.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                                {/* Second Image Placeholder */}
                                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                                    <img
                                        src="/images/socialist-democracy/unity.jpg"
                                        alt="Cách mạng Tháng Mười Nga 1917 - Lenin phát biểu trước quần chúng"
                                        className="w-full h-full object-cover"
                                    />

                                </div>
                            </div>

                        </div>

                        <p className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <strong>Tầm nhìn dài hạn:</strong> Xây dựng xã hội cộng sản - xã hội không có giai cấp,
                            không có áp bức bóc lột, mọi người đều được phát triển tự do và toàn diện.
                        </p>
                    </TabsContent>

                   <TabsContent value="practical-examples" className="border rounded-lg p-6">
    <div className="space-y-8">
        <h3 className="text-xl font-medium text-primary">Ví dụ thực tiễn</h3>

        {/* Vietnam Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Vietnam Text */}
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Việt Nam</h4>
                <p>
                    Thực hiện phương châm <strong>"dân biết, dân bàn, dân làm, dân kiểm tra"</strong>
                    trong mọi hoạt động quản lý nhà nước và xã hội.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Chính sách an sinh xã hội toàn diện</li>
                    <li>Các chương trình giảm nghèo hiệu quả</li>
                    <li>Bảo hiểm y tế toàn dân</li>
                    <li>Hệ thống giáo dục công bằng, bình đẳng</li>
                    <li>Dân chủ cơ sở thông qua các tổ chức Mặt trận, đoàn thể</li>
                </ul>
            </div>

            {/* Right Column - Vietnam Image */}
            <div className="flex items-center justify-center">
                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                    <img
                        src="/images/socialist-democracy/vietnam.jpg"
                        alt="Việt Nam - Dân chủ xã hội chủ nghĩa"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        {/* Cuba Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Cuba Text */}
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Cuba</h4>
                <p>
                    Dù phải chịu lệnh cấm vận kinh tế gay gắt, Cuba vẫn duy trì được:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Hệ thống y tế miễn phí cho toàn dân</li>
                    <li>Giáo dục miễn phí từ mầm non đến đại học</li>
                    <li>Tỷ lệ biết chữ gần 100%</li>
                    <li>Hệ thống an sinh xã hội bao phủ toàn dân</li>
                </ul>
            </div>

            {/* Right Column - Cuba Image */}
            <div className="flex items-center justify-center">
                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                    <img
                        src="/images/socialist-democracy/cuba.jpeg"
                        alt="Cuba - Dân chủ xã hội chủ nghĩa"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        {/* China Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - China Text */}
            <div className="space-y-4">
                <h4 className="text-lg font-medium">Trung Quốc</h4>
                <p>
                    Thực hiện <strong>"dân chủ hiệp thương"</strong> qua Hội nghị Chính trị Hiệp thương Nhân dân Trung Quốc:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Tham vấn ý kiến các tầng lớp nhân dân trong xây dựng chính sách</li>
                    <li>Kết hợp lãnh đạo của Đảng với quyền làm chủ của nhân dân</li>
                    <li>Mô hình "toàn quá trình dân chủ nhân dân"</li>
                    <li>Chương trình xóa đói giảm nghèo quy mô lớn</li>
                </ul>
            </div>

            {/* Right Column - China Image */}
            <div className="flex items-center justify-center">
                <div className="rounded-lg w-full h-[250px] overflow-hidden">
                    <img
                        src="/images/socialist-democracy/china.jpeg"
                        alt="Trung Quốc - Dân chủ xã hội chủ nghĩa"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        {/* Conclusion */}
        <p className="mt-6 p-4 bg-green-50 rounded-lg">
            <strong>Bài học chung:</strong> Các nước xã hội chủ nghĩa đều đặt người dân làm trung tâm,
            ưu tiên phát triển giáo dục, y tế, và an sinh xã hội, tạo nền tảng cho dân chủ thực chất.
        </p>
    </div>
</TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default SociallistDemocracy;