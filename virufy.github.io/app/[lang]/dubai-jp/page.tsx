'use client';

import ExportedImage from 'next-image-export-optimizer';

export default function DubaiInternshipPage() {
    return (
        <div className="relative -top-24">
            {/* Hero Section */}
            <section>
                <div className="relative bg-[#1e3a8a]">
                    <ExportedImage
                        className="absolute object-cover opacity-40 w-full h-full"
                        src="/images/dubai-jp/burj-khalifa.webp"
                        alt="Burj Khalifa"
                        priority
                        fill
                        sizes="100vw"
                    />
                    <div className="relative flex flex-col items-center justify-center pb-12 pt-32 md:pb-48 md:pt-72">
                        <div className="max-w-4xl px-8 text-center font-medium text-white md:max-w-4xl">
                            <h1 className="text-2xl font-medium leading-loose md:text-3xl md:leading-normal">
                                Virufyドバイ2025年医療AIインターンシップ募集
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="relative -mb-24 bg-[#1e3a8a] py-12">
                <div className="max-w-3xl mx-auto text-left text-lg text-white px-6">
                    <p className="mb-4">
                        <a 
                            href="https://virufy.org/ja" 
                            className="text-blue-400 underline font-bold hover:text-blue-300"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Virufy
                        </a> は、音声分析による病気診断AIアプリを開発するNPO法人です。スタンフォード大学でAIを専攻したカンザダあみる（福井大学博士課程）が代表を務め、250名のボランティアと共に活動しています。ドバイ王女財団の支援を受け、2025年4月～2026年2月、ドバイで医療AIプロジェクトの実証研究を行います。
                    </p>
                    <p className="mb-4">
                        つきましては、ドバイでの有給インターンシップに、意欲的な学生・若手社会人を募集します。アプリ開発、ウェブ開発、音声AI、データ/クラウドエンジニアリング、経営、スタートアップ開発等に興味のある方、歓迎します！（実務経験不問）
                    </p>

                    <h2 className="text-xl font-bold mt-6"><strong>インターンシップ概要:</strong></h2>
                    <p className="mt-2">
                        このフルタイム（1日8時間）インターンシップでは、ドバイの実証研究に携わり、国際的なチームで実践経験を積みます。
                    </p>

                    <ul className="list-disc pl-6 mt-4">
                        <li><strong>場所:</strong> ドバイ、UAE。</li>
                        <li><strong>期間:</strong> 2025年4月～2026年2月 (10ヶ月)。</li>
                        <li><strong>チーム:</strong> 代表（日本人）と2～4名の日本人インターン。スタンフォード大学、MIT、ハーバード大学の研究者と遠隔連携。</li>

                        <li><h2><strong>職種:</strong></h2>
                            <ul className="list-inside list-disc pl-6">
                                <li><strong>技術系：</strong> 上記技術分野。</li>
                                <li><strong>経営/管理系：</strong> 経営、スタートアップ開発。</li>
                            </ul>
                        </li>

                        <li><h2><strong>業務内容:</strong> 職種、スキル、プロジェクトニーズに応じて決定。</h2>
                            <ul className="list-inside list-disc pl-6">
                                <li><strong>技術系：</strong> 診断アプリ開発・展開、クラウドインフラ管理、データベース運用、AIアルゴリズム実装など。</li>
                                <li><strong>経営/管理系：</strong> 事業戦略策定、市場調査、プロジェクト管理、資金調達支援など。</li>
                            </ul>
                        </li>

                        <li><strong>必須スキル:</strong> 英語の記述能力（TOEICスコア推奨）</li>

                        <li><strong>歓迎スキル:</strong> 英語の会話能力、関連技術経験、経営・スタートアップ開発経験</li>

                        <li><strong>待遇:</strong> 休学費用（学生のみ）、生活費支給（家賃、光熱費、食費、交通費込）、往復航空券、ビザ取得サポート、経験と現地物価に応じた給与、研修提供</li>

                        <li><strong>宿泊施設:</strong> ドバイにて提供（詳細は後日）</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6">応募方法:</h2>
                    <p>
                        履歴書（和文・英文）と志望動機書（和文・英文）を  
                        <a 
                            href="mailto:join-dubai@virufy.org" 
                            className="text-blue-400 underline font-bold hover:text-blue-300"
                        >
                             join-dubai@virufy.org
                        </a> へ。
                    </p>
                    <p>選考プロセスは応募後個別に連絡します。</p>

                    <h2 className="text-xl font-bold mt-6">お問い合わせ:</h2>
                    <p>
                        <a 
                            href="mailto:join-dubai@virufy.org" 
                            className="text-blue-400 underline font-bold hover:text-blue-300"
                        >
                             join-dubai@virufy.org
                        </a> まで。
                    </p>
                </div>

                <div className="flex justify-center">
                    <a 
                        href="https://virufy.org/join-jp/" 
                        target="_blank" 
                        className="mt-6 inline-block bg-blue-500 px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
                    >
                        詳細 & 応募する
                    </a>
                </div>
            </div>
        </div>
    );
}
