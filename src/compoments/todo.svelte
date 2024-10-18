<script>
    let todos = [
        {
            name : 'tache',
            done : false
        }
    ]

    let newtodo = ''

    function addtodo() {
        todos = [...todos, {
            name : newtodo,
            done : false
        }]
    
        newtodo = ''
    }

</script>

<h1>Todo Liste</h1>

<ul>
    {#each todos as todo}
    <li>
        <input type="checkbox" bind:checked={todo.done}>
         <span class:done="{todo.done}" >{todo.name}</span>
        </li>
    {/each}
</ul>

<input type="text" bind:value={newtodo}>
<button on:click={addtodo} >ajouter</button>

<style>
    .done{
        text-decoration: line-through;
    }
</style>