import { MessageForm } from '@/components/message-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-svh items-center justify-center pt-20 pb-28">
      <div className="box-content w-full px-6">
        <MessageForm />
      </div>
    </div>
  );
}
