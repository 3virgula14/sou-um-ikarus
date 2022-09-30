import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        here from layout
        <Slot />
      </main>
      <footer>
        <a href="https://github.com/3virgula14" target="_blank">
          3virgula14 github
        </a>
      </footer>
    </>
  );
});
