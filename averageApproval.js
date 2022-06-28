function ageMedia(alunos, mediaAprovação) {
  initalValue = 0;
  aprovados = [];
  reprovados = [];
  const grades = alunos.map((e) =>
    e.notas.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue / e.notas.length,
      initalValue
    )
  );
  for (i in grades) {
    grades[i] > mediaAprovação
      ? aprovados.push(alunos[i])
      : reprovados.push(alunos[i]);
  }
  let idadeAprovados = aprovados.map((e) => e.idade);
  let mediaDeAprovados = idadeAprovados.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue / idadeAprovados.length,
    initalValue
  );

  let idadeReprovados = reprovados.map((e) => e.idade);
  let mediaDeReprovados = idadeReprovados.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue / idadeReprovados.length,
    initalValue
  );

  if (idadeAprovados.length === 1) {
    console.log(
      `O unico aluno aprovado tem idade de ${idadeAprovados[0]} anos`
    );
  } else if (idadeAprovados.length > 1) {
    console.log(
      `A media de idade dos ${idadeAprovados.length} alunos aprovados = ${mediaDeAprovados}`
    );
  } else {
    console.log("Nenhum dos alunos foi aprovado");
  }

  if (idadeReprovados.length === 1) {
    console.log(
      `O unico aluno reprovado tem idade de ${idadeReprovados[0]} anos`
    );
  } else if (idadeReprovados.length > 1) {
    console.log(
      `A media de idade dos ${idadeReprovados.length} alunos reprovados = ${mediaDeReprovados}`
    );
  } else {
    console.log("Nenhum dos alunos foi reprovado");
  }
}

ageMedia(
  [
    {
      idade: 9,
      notas: [9.6, 6.5, 7, 5.4, 3.1],
    },
    {
      idade: 15,
      notas: [5.6, 2.5, 9, 5.4, 7.1],
    },
    {
      idade: 19,
      notas: [2.6, 2.5, 5, 4.4, 7.1],
    },
  ], 5
);
