console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java 56 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.NodeApiVersions"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.NodeApiVersions" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NodeApiVersions"
 , "c2" : "create()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NodeApiVersions"
 , "c2" : "create(Collection<ApiVersion>)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "NodeApiVersions"
 , "c2" : "create(short;short;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NodeApiVersions"
 , "c2" : "NodeApiVersions(Collection<ApiVersion>;Collection<SupportedFeatureKey>)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "latestUsableVersion(ApiKeys)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "latestUsableVersion(ApiKeys;short;short)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString(boolean)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "apiVersionToText(ApiVersion)"
 , "c3" : "10"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersion"
 , "c2" : "apiVersion(ApiKeys)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<ApiKeys,ApiVersion>"
 , "c2" : "allSupportedApiVersions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,SupportedVersionRange>"
 , "c2" : "supportedFeatures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class NodeApiVersions contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method create arguments Collection&lt;ApiVersion &gt;  overrides"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.clients.NodeApiVersions.create@POLYN197857 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.NodeApiVersions.create@POLYN197857 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method create arguments short  apiKey|short  minVersion|short  maxVersion"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method latestUsableVersion arguments ApiKeys  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument apiKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method latestUsableVersion arguments ApiKeys  apiKey|short  oldestAllowedVersion|short  latestAllowedVersion"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method latestUsableVersion list of called methods Object monObjet|java.util.Optional&lt;ApiVersion&gt; ApiVersionsResponse_intersectN201218"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument apiKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  'The broker does not support ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  'The broker does not support ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  ' with version in range [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  ']. The supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  ' range is [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.NodeApiVersions.latestUsableVersion@POLYN200779 the MagicNumber/String  '].' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202102 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method toString arguments boolean  lineBreaks"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  '): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  'UNSUPPORTED' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  ',\n\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  '\n\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.clients.NodeApiVersions.toString@POLYN202316 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method apiVersionToText arguments ApiVersion  apiVersion"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00146] For method apiVersionToText list of called methods Object monObjet|short Utils_minN206238"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument apiVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  '): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  'UNKNOWN(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  '): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  ' [unusable: node too new]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  ' [unusable: node too old]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  ' [usable: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.clients.NodeApiVersions.apiVersionToText@POLYN204417 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method apiVersion arguments ApiKeys  apiKey"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00035] Public method create is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00040] Public method create is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method create is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00084] Public method latestUsableVersion is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method latestUsableVersion is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00109] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00114] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00177] Public method apiVersion is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/NodeApiVersions.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00181] Public method allSupportedApiVersions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
