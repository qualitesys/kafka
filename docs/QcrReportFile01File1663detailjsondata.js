console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java 4 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorSupplier<KIn,VIn,KOut,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KStreamMap"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KStreamMap" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#17"
 , "c1" : "KStreamMap"
 , "c2" : "KStreamMap(KeyValueMapper<?superKIn,?superVIn,?extendsKeyValue<?extendsKOut,?extendsVOut>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#22"
 , "c1" : "Processor<KIn,VIn,KOut,VOut>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class KStreamMap contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.streams.kstream.internals.KStreamMap.KStreamMapProcessor.process@POLYN148313 the MagicNumber/String  'The provided KeyValueMapper returned null which is not allowed.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KStreamMap.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
