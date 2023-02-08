console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java 21 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "NamedOperation<Repartitioned<K,V>>"
 , "c2" : "org.apache.kafka.streams.kstream.Repartitioned"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.Repartitioned" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#40"
 , "c1" : "Repartitioned"
 , "c2" : "Repartitioned(String;Serde&lt;K&gt;;Serde&lt;V&gt;;Integer;StreamPartitioner&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#52"
 , "c1" : "Repartitioned"
 , "c2" : "Repartitioned(Repartitioned&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#125"
 , "c1" : "Repartitioned&lt;K,V&gt;"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#135"
 , "c1" : "Repartitioned&lt;K,V&gt;"
 , "c2" : "withNumberOfPartitions(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00145"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#145"
 , "c1" : "Repartitioned&lt;K,V&gt;"
 , "c2" : "withKeySerde(Serde&lt;K&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00155"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#155"
 , "c1" : "Repartitioned&lt;K,V&gt;"
 , "c2" : "withValueSerde(Serde&lt;V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#167"
 , "c1" : "Repartitioned&lt;K,V&gt;"
 , "c2" : "withStreamPartitioner(StreamPartitioner&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument repartitioned is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.Repartitioned the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method withName arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method withNumberOfPartitions arguments int  numberOfPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method withKeySerde arguments Serde&lt;K &gt;  keySerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method withValueSerde arguments Serde&lt;V &gt;  valueSerde"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method withStreamPartitioner arguments StreamPartitioner&lt;K ,V &gt;  partitioner"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Repartitioned.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
