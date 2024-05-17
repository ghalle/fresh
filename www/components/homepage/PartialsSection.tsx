import Counter from "$fresh/www/islands/Counter.tsx";
import { CodeBlock } from "$fresh/www/components/CodeBlock.tsx";
import { CodeWindow } from "$fresh/www/components/CodeWindow.tsx";
import { PageSection } from "$fresh/www/components/PageSection.tsx";
import { SideBySide } from "$fresh/www/components/SideBySide.tsx";
import { SectionHeading } from "$fresh/www/components/homepage/SectionHeading.tsx";
import { DemoBox } from "$fresh/www/components/homepage/DemoBox.tsx";
import { ExampleArrow } from "$fresh/www/components/homepage/ExampleArrow.tsx";
import { RecipeDemo } from "$fresh/www/components/homepage/RecipeDemo.tsx";
import { FancyLink } from "$fresh/www/components/FancyLink.tsx";

const islandCode = `import { Partial } from "$fresh/runtime.ts";

export const Recipes = () => (
  <div f-client-nav>
    <aside>
      <button f-partial="/recipes/lemonade">
        Lemonade
      </button>
      <button f-partial="/recipes/lemon-honey-tea">
        Lemon-honey tea
      </button>
      <button f-partial="/recipes/lemondrop">
        Lemondrop Martini
      </button>
    </aside>
    <main>
      <Partial name="recipe">
        Click a recipe to stream HTML into this spot
      </Partial>
    </main>
  </div>
);`;

export function PartialsSection() {
  return (
    <PageSection>
      <SideBySide mdColSplit="3/2" lgColSplit="3/2" reverseOnDesktop={true}>
        <div class="flex flex-col gap-4">
          <svg
            role="img"
            alt="Arrows transferring data down "
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrows-transfer-down text-fresh"
            width="4rem"
            height="4rem"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 3v6" />
            <path d="M10 18l-3 3l-3 -3" />
            <path d="M7 21v-18" />
            <path d="M20 6l-3 -3l-3 3" />
            <path d="M17 21v-2" />
            <path d="M17 15v-2" />
          </svg>

          <SectionHeading>Stream HTML straight from the server</SectionHeading>
          <p>
            Fresh Partials let you fetch HTML and update only the parts of the
            page that need to change, without reloading the entire page.
          </p>
          <FancyLink href="/docs/concepts/partials" class="mt-4">
            Learn more about Partials
          </FancyLink>
        </div>
        <div class="flex flex-col gap-4">
          <CodeWindow name="components/Recipes.tsx">
            <CodeBlock
              code={islandCode}
              lang="jsx"
            />
          </CodeWindow>
          <ExampleArrow class="[transform:rotateY(-180deg)]" />
          <DemoBox flip={true}>
            <RecipeDemo />
          </DemoBox>
        </div>
      </SideBySide>
    </PageSection>
  );
}