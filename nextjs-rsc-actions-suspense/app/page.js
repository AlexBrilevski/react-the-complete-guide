import fs from 'node:fs/promises';

import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import RSCDemo from "@/components/RSCDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import ErrorBoundary from '@/components/ErrorBoundary';
import { Suspense } from "react";

export default function Home() {
  const fetchedUsers = new Promise((resolve, reject) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users);
    // reject(new Error('Error!'));
  }, 3000));

  return (
    <main>
      <ErrorBoundary fallback={'Something went wrong!'}>
        <Suspense fallback={<p>Loading data...</p>}>
          <UsePromiseDemo usersPromise={fetchedUsers} />
        </Suspense>
      </ErrorBoundary>
      <ClientDemo>
        <RSCDemo />
        <DataFetchingDemo />
        <ServerActionsDemo />
      </ClientDemo>
    </main>
  );
}
