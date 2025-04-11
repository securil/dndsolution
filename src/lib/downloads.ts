// ✅ 다운로드 데이터 불러오기 함수 - /src/lib/downloads.ts
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export interface DownloadItem {
  id: string;
  name: string;
  description: string;
  version: string;
  date: string;
  fileUrl: string;
}

export async function fetchDownloads(): Promise<DownloadItem[]> {
  const colRef = collection(db, 'downloads');
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as DownloadItem[];
}
