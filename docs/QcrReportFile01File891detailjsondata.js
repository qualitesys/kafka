console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Iterator<T>"
 , "c2" : "org.apache.kafka.common.utils.CircularIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.CircularIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#50"
 , "c1" : "CircularIterator"
 , "c2" : "CircularIterator(Collection&lt;T&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#66"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#71"
 , "c1" : "T"
 , "c2" : "next()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#83"
 , "c1" : "T"
 , "c2" : "advance()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#98"
 , "c1" : "T"
 , "c2" : "peek()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#103"
 , "c1" : "void"
 , "c2" : "remove()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.svg" }

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
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument col is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.utils.CircularIterator.CircularIterator@POLYN166432 the MagicNumber/String  'CircularIterator can only be used on non-empty lists' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.utils.CircularIterator.hasNext@POLYN167050 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00103] Valued method remove is empty or contains only a return. Interface segregation for Iterator<T>"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00103] In the class CircularIterator which implements the interface(s) Iterator<T>, the method remove is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedIterator<T>"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/CircularIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
