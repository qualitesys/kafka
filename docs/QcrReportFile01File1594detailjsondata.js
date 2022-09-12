console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "NamedOperation<Printed<K,V>>"
 , "c2" : "org.apache.kafka.streams.kstream.Printed"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.Printed" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#21"
 , "c1" : "Printed"
 , "c2" : "Printed(OutputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#26"
 , "c1" : "Printed"
 , "c2" : "Printed(Printed<K,V>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#52"
 , "c1" : "Printed<K,V>"
 , "c2" : "withLabel(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#59"
 , "c1" : "Printed<K,V>"
 , "c2" : "withKeyValueMapper(KeyValueMapper<?superK,?superV,String>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#67"
 , "c1" : "Printed<K,V>"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class Printed contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument printed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.Printed the MagicNumber/String  'filePath can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.Printed the MagicNumber/String  'filePath can't be an empty string' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.kstream.Printed the MagicNumber/String  'Unable to write stream to file at [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.kstream.Printed the MagicNumber/String  '] ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method withLabel arguments String  label"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.streams.kstream.Printed.withLabel@POLYN164456 the MagicNumber/String  'label can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method withKeyValueMapper arguments KeyValueMapper&lt;? super K ,? super V ,String &gt;  mapper"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.Printed.withKeyValueMapper@POLYN165339 the MagicNumber/String  'mapper can't be null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Printed.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method withName arguments String  processorName"
}} 
]
};
console.log('leListeStr 99 main end');
