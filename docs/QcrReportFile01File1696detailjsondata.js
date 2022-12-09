console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java 22 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.internals.FullChangeSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.FullChangeSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#24"
 , "c1" : "FullChangeSerde"
 , "c2" : "FullChangeSerde(Serde<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#28"
 , "c1" : "Serde<T>"
 , "c2" : "innerSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#32"
 , "c1" : "Change<byte[]>"
 , "c2" : "serializeParts(String;Change<T>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#43"
 , "c1" : "Change<T>"
 , "c2" : "deserializeParts(String;Change<byte[]>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#58"
 , "c1" : "Change<byte[]>"
 , "c2" : "decomposeLegacyFormattedArrayIntoChangeArrays(byte[])"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
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
 , "c1" : "00017"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method serializeParts arguments String  topic|Change&lt;T &gt;  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.serializeParts@POLYN153338 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method deserializeParts arguments String  topic|Change&lt;byte[] &gt;  serialChange"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.deserializeParts@POLYN154239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method decomposeLegacyFormattedArrayIntoChangeArrays arguments byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.decomposeLegacyFormattedArrayIntoChangeArrays@POLYN155312 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.internals.FullChangeSerde.decomposeLegacyFormattedArrayIntoChangeArrays@POLYN155312 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00032] Public method serializeParts is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method deserializeParts is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00058] Public method decomposeLegacyFormattedArrayIntoChangeArrays is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/FullChangeSerde.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
