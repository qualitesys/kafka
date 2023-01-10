console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java 12 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.query.PositionBound"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.query.PositionBound" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#34"
 , "c1" : "PositionBound"
 , "c2" : "PositionBound(Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#41"
 , "c1" : "PositionBound"
 , "c2" : "unbounded()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#48"
 , "c1" : "PositionBound"
 , "c2" : "at(Position)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#55"
 , "c1" : "boolean"
 , "c2" : "isUnbounded()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#62"
 , "c1" : "Position"
 , "c2" : "position()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#67"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#72"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#84"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.svg" }

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
 , "c4" : "2"
}}
,
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method at arguments Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.query.PositionBound.toString@POLYN150600 the MagicNumber/String  'PositionBound{position=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.query.PositionBound.toString@POLYN150600 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00076] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN150748 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN150748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.query.PositionBound.equals@POLYN150748 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.query.PositionBound.hashCode@POLYN151315 the MagicNumber/String  'This mutable object is not suitable as a hash key' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00041] Public method unbounded is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00084] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/query/PositionBound.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
