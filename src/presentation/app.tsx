import './app.styles.css';
import { AlbumSearchView } from "@/presentation/views/album-search/album-search.view";

export function App() {
  return (
    <div className="app">
      <main>
        <AlbumSearchView />
      </main>
    </div>
  );
}
