import { createBoard } from '@wixc3/react-board';
import { ClassicGrig } from '../../../components/classic-grig/classic-grig';

export default createBoard({
    name: 'ClassicGrig',
    Board: () => <ClassicGrig />,
    isSnippet: true,
});
