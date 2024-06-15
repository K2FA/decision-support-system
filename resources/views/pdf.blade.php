<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PDF Template</title>

    <style>
        h1 {
            text-align: center;
        }

        h3 {
            margin-top: 2rem
        }

        table {
            border-collapse: collapse;
            margin-top: 1rem
        }

        th,
        td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h1>Proses Pasca Panen {{ $rank_results[0]->GoalSelect->choice }}</h1>

    {{-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Data Input ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --}}
    <h3>Data Input Perbandingan Berpasangan:</h3>
    <table>
        <thead>
            <tr>
                <th></th>
                @foreach ($criterias as $criteria)
                    <th>{{ $criteria->name }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($criterias as $criteria)
                <tr>
                    <td>{{ $criteria->name }}</td>
                    @foreach ($criteria_input[$criteria->id] as $crit)
                        @foreach ($anhipros[$crit->id] as $anhipro)
                            <td>{{ $anhipro->result }}</td>
                        @endforeach
                    @endforeach
                </tr>
            @endforeach

        </tbody>
    </table>

    {{-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Data Perangkingan ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --}}
    <h3>Data Input Bobot Alternatif:</h3>
    <table>
        <thead>
            <tr>
                <th></th>
                @foreach ($criterias as $criteria)
                    <th>{{ $criteria->name }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($alternative as $alter)
                <tr>
                    <td>{{ $alter->name }}</td>
                    @foreach ($rankInputs[$alter->id] as $rank_input)
                        @foreach ($rank_datas[$rank_input->id] as $rank)
                            <td>{{ $rank->value }}</td>
                        @endforeach
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>

    {{-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hasil Perhitungan ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --}}
    <h3>Hasil Perhitungan:</h3>
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Alternative</th>
                <th>Hasil Nilai</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($rank_results as $index => $result)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $result->Alternative->name }}</td>
                    <td>{{ $result->result }}</td>
                    <td>{{ $result->rank }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>

</html>
